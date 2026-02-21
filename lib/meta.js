// meta.js — unified tracking wrapper with deduplication
import { sendCapiEvent } from "./metaCapi";
import { trackEvent as sendPixelEvent } from "./metaPixel";

// Generates a unique event ID shared between pixel and CAPI
function generateEventID(eventName) {
  return `${eventName}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export function trackEvent(eventName, params = {}, manualEventID = null, customData = {}) {
  const eventID = manualEventID || generateEventID(eventName);

  // 1. Browser pixel — sends eventID so Facebook can deduplicate
  if (typeof window !== "undefined") {
    sendPixelEvent(eventName, params, eventID);
  }

  // 2. Server CAPI — sends same eventID for matching
  sendCapiEvent({
    eventName,
    email: params.email || "",
    phone: params.phone || "",
    eventID,
    customData,
  });
}