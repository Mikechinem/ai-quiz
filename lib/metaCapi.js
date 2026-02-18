export async function sendCapiEvent({
  eventName,
  email,
  phone,
  eventID,
  customData = {},
}) {
  // Call your Next.js API route instead of Facebook directly
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