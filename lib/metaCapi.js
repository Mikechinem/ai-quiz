// metaCapi.js — server-side CAPI via Next.js API route
export async function sendCapiEvent({
  eventName,
  email,
  phone,
  eventID,
  customData = {},
}) {
  if (typeof window === "undefined") {
    console.log("Skipping client CAPI call on server");
    return;
  }

  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        email,
        phone,
        eventID,   // ← this is what Facebook uses to match and deduplicate
        customData,
      }),
    });
  } catch (err) {
    console.error("CAPI send error:", err);
  }
}