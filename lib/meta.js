// meta.js — unified tracking wrapper
import { sendCapiEvent } from "./metaCapi";
import { trackEvent as sendPixelEvent } from "./metaPixel";  // Fix this line

export function trackEvent(event, params = {}) {
  // Client-side pixel
  if (typeof window !== "undefined") {
    sendPixelEvent(event, params);
  }

  // Server-side CAPI
  sendCapiEvent(event, params);
}