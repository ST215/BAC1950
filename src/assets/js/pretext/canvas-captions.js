import { layoutWithLines } from "@chenglou/pretext";
import { fontFromElement, lineHeightFromElement, prepareSegmented } from "./measure-utility.js";

function renderCaption(host) {
  const text = host.dataset.pretextCanvasCaption;
  if (!text) return;

  const width = host.clientWidth;
  if (width <= 0) return;

  const dpr = window.devicePixelRatio || 1;
  const font = fontFromElement(host);
  const lineHeight = lineHeightFromElement(host);
  const prepared = prepareSegmented(text, font);
  const { height, lines } = layoutWithLines(prepared, width, lineHeight);
  if (!lines.length) return;

  const canvas = document.createElement("canvas");
  canvas.width = width * dpr;
  canvas.height = Math.ceil(height) * dpr;
  canvas.style.width = width + "px";
  canvas.style.height = Math.ceil(height) + "px";
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", text);

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.font = font;
  ctx.textBaseline = "top";
  ctx.fillStyle = getComputedStyle(host).color || "#1d1d1f";

  const ascentOffset = (lineHeight - parseFloat(getComputedStyle(host).fontSize)) / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line.text, 0, i * lineHeight + ascentOffset);
  });

  host.innerHTML = "";
  host.appendChild(canvas);
  host.dataset.pretextCanvasRendered = "1";
}

export default function initCanvasCaptions() {
  const elements = document.querySelectorAll("[data-pretext-canvas-caption]:not([data-pretext-canvas-rendered])");
  elements.forEach(renderCaption);

  if (typeof ResizeObserver !== "undefined") {
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        delete entry.target.dataset.pretextCanvasRendered;
        renderCaption(entry.target);
      }
    });
    elements.forEach((el) => ro.observe(el));
  }
}
