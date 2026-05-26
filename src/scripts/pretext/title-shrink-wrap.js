import { walkLineRanges } from "@chenglou/pretext";
import { fontFromElement, prepareSegmented } from "./measure-utility.js";

const SELECTORS = ["h1.hero-title", ".hero h1", "[data-pretext-balance]"];
const MIN_CONTAINER_WIDTH = 300;

function countLines(prepared, width) {
  let n = 0;
  walkLineRanges(prepared, width, () => {
    n++;
  });
  return n;
}

function shrinkWrap(el) {
  const text = el.textContent.trim();
  if (!text) return;
  const currentWidth = el.clientWidth;
  if (currentWidth < MIN_CONTAINER_WIDTH) return;

  const font = fontFromElement(el);
  const prepared = prepareSegmented(text, font);
  const targetLines = countLines(prepared, currentWidth);
  if (targetLines <= 1) return;

  const lowerBound = Math.max(240, Math.floor(currentWidth * 0.5));
  let lo = lowerBound;
  let hi = currentWidth;
  let bestWidth = currentWidth;
  for (let i = 0; i < 14 && lo <= hi; i++) {
    const mid = Math.floor((lo + hi) / 2);
    const lines = countLines(prepared, mid);
    if (lines <= targetLines) {
      bestWidth = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  if (bestWidth < lowerBound || bestWidth >= currentWidth * 0.98) return;

  el.style.maxWidth = `${Math.ceil(bestWidth)}px`;
  el.dataset.pretextBalanced = "1";
}

export default function initShrinkWrap() {
  const elements = document.querySelectorAll(SELECTORS.join(","));
  elements.forEach(shrinkWrap);

  if (typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.style.maxWidth = "";
        shrinkWrap(entry.target);
      }
    });
    elements.forEach((el) => {
      if (el.parentElement) ro.observe(el.parentElement);
    });
  }
}
