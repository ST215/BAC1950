import { prepare, prepareWithSegments, layout, measureNaturalWidth } from "@chenglou/pretext";

const cache = new Map();

export function fontFromElement(el) {
  const cs = getComputedStyle(el);
  const weight = cs.fontWeight || "400";
  const style = cs.fontStyle && cs.fontStyle !== "normal" ? cs.fontStyle + " " : "";
  const size = cs.fontSize;
  const family = cs.fontFamily;
  return `${style}${weight} ${size} ${family}`;
}

export function lineHeightFromElement(el) {
  const cs = getComputedStyle(el);
  const lh = parseFloat(cs.lineHeight);
  if (Number.isFinite(lh) && lh > 0) return lh;
  const fs = parseFloat(cs.fontSize) || 16;
  return fs * 1.2;
}

function cacheKey(text, font, width, opts) {
  const o = opts ? JSON.stringify(opts) : "";
  return `${font}::${width}::${o}::${text}`;
}

export function measureHeight(text, { font, width, lineHeight, options } = {}) {
  const key = cacheKey(text, font, width, options) + "::H";
  if (cache.has(key)) return cache.get(key);
  const prepared = prepare(text, font, options);
  const result = layout(prepared, width, lineHeight);
  cache.set(key, result.height);
  return result.height;
}

export function measureNaturalPx(text, { font, options } = {}) {
  const key = `${font}::nat::${text}`;
  if (cache.has(key)) return cache.get(key);
  const prepared = prepareWithSegments(text, font, options);
  const w = measureNaturalWidth(prepared);
  cache.set(key, w);
  return w;
}

export function prepareText(text, font, options) {
  return prepare(text, font, options);
}

export function prepareSegmented(text, font, options) {
  return prepareWithSegments(text, font, options);
}

export function clearMeasurementCache() {
  cache.clear();
}

export async function ready() {
  if (document.readyState !== "complete") {
    await new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));
  }
  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) {}
  }
  await new Promise((resolve) => requestAnimationFrame(resolve));
}
