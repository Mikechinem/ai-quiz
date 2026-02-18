export async function sendCapiEvent({
  eventName,
  email,
  phone,
  eventID,
  customData = {},
}) {
  // Only call API from client-side, skip on server
  if (typeof window === "undefined") {
    console.log("Skipping client CAPI call on server");
    return;
  }

  // Call your Next.js API route from client
  await fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      eventName,
      email,
      phone,
      eventID,
      customData,
    }),
  });
}