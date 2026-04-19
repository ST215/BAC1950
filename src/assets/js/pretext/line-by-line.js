import { layoutWithLines } from "@chenglou/pretext";
import { fontFromElement, lineHeightFromElement, prepareSegmented } from "./measure-utility.js";

function splitIntoLines(el) {
  const text = el.textContent.trim();
  if (!text) return;
  const width = el.clientWidth;
  if (width <= 0) return;

  const font = fontFromElement(el);
  const lineHeight = lineHeightFromElement(el);
  const prepared = prepareSegmented(text, font);
  const result = layoutWithLines(prepared, width, lineHeight);

  const frag = document.createDocumentFragment();
  result.lines.forEach((line, i) => {
    const span = document.createElement("span");
    span.className = "pt-line";
    span.style.setProperty("--pt-line-index", String(i));
    span.style.setProperty("--pt-line-count", String(result.lines.length));
    span.textContent = line.text;
    frag.appendChild(span);
    if (i < result.lines.length - 1) frag.appendChild(document.createTextNode(" "));
  });

  el.textContent = "";
  el.appendChild(frag);
  el.dataset.pretextLines = "done";
}

export default function initLineByLine() {
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = document.querySelectorAll("[data-pretext-lines]:not([data-pretext-lines='done'])");
  elements.forEach((el) => {
    splitIntoLines(el);
    if (reduceMotion) el.classList.add("pt-reduced-motion");
  });
}
