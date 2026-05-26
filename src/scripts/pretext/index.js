import { setLocale } from "@chenglou/pretext";
import initHeightReservation from "./cls-height-reservation.js";
import initShrinkWrap from "./title-shrink-wrap.js";
import initLineByLine from "./line-by-line.js";
import initCanvasCaptions from "./canvas-captions.js";
import {
  measureHeight,
  measureNaturalPx,
  prepareText,
  prepareSegmented,
  clearMeasurementCache,
  ready,
} from "./measure-utility.js";

setLocale("en-US");

async function boot() {
  await ready();
  initHeightReservation();
  initShrinkWrap();
  initLineByLine();
  initCanvasCaptions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}

export {
  measureHeight,
  measureNaturalPx,
  prepareText,
  prepareSegmented,
  clearMeasurementCache,
  initHeightReservation,
  initShrinkWrap,
  initLineByLine,
  initCanvasCaptions,
};
