import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { eventName, email, phone, eventID, customData } = await req.json();

    const pixelId = process.env.FB_PIXEL_ID;
    const accessToken = process.env.FB_ACCESS_TOKEN;

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: eventName,
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_id: eventID,
              user_data: {
                em: email ? [email] : [],
                ph: phone ? [phone] : [],
              },
              custom_data: customData || {},
            },
          ],
        }),
      }
    );

    const result = await response.json();
    
    if (!response.ok) {
      console.error("Facebook CAPI error:", result);
      return NextResponse.json({ success: false, error: result }, { status: 500 });
    }

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error("CAPI tracking error:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}