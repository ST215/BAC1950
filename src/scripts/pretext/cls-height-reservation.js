import { fontFromElement, lineHeightFromElement, measureHeight } from "./measure-utility.js";

const SELECTORS = [
  "p.tagline",
  ".card-text",
  ".news-item-caption",
  ".event-description p",
  ".gallery-caption",
];

const observed = new WeakSet();

function reserveHeight(el) {
  const text = el.textContent.trim();
  if (!text) return;
  const width = el.clientWidth;
  if (width <= 0) return;

  const font = fontFromElement(el);
  const lineHeight = lineHeightFromElement(el);
  const h = measureHeight(text, { font, width, lineHeight });
  if (h > 0) {
    el.style.minHeight = `${Math.ceil(h)}px`;
    el.dataset.pretextReserved = "1";
  }
}

function observeElement(el, ro) {
  if (observed.has(el)) return;
  observed.add(el);
  reserveHeight(el);
  ro.observe(el);
}

export default function initHeightReservation() {
  if (typeof ResizeObserver === "undefined") return;
  const ro = new ResizeObserver((entries) => {
    for (const entry of entries) {
      reserveHeight(entry.target);
    }
  });
  const elements = document.querySelectorAll(SELECTORS.join(","));
  elements.forEach((el) => observeElement(el, ro));
}
