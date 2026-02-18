import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER,
});

export async function POST(req) {
  console.log('All env vars:', {
    hasApiKey: !!process.env.MAILCHIMP_API_KEY,
    hasServer: !!process.env.MAILCHIMP_SERVER,
    serverValue: process.env.MAILCHIMP_SERVER
  });

  try {
    const { name, email, phone, score } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const firstName = name.split(" ")[0];
    const tag = score >= 18 ? "Ready Buyer" : "Nurture Lead";
    const audienceId = "974173adad";

    await mailchimp.lists.setListMember(
      audienceId,
      email.toLowerCase(),
      {
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: firstName,
          PHONE: phone || "",
          SCORE: score,
        },
        tags: [tag],
      }
    );

    // CAPI EVENT (server-side Meta tracking) - call Facebook directly
    const eventID = `${email}-${Date.now()}`;
    const pixelId = process.env.FB_PIXEL_ID;
    const accessToken = process.env.FB_ACCESS_TOKEN;

    await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_id: eventID,
              user_data: {
                em: [email],
                ph: phone ? [phone] : [],
              },
              custom_data: { score, tag },
            },
          ],
        }),
      }
    );
    
    // Return redirect path to client
    const redirectPath = score >= 18 ? "/ready-to-buy-lead" : "/need-nurture-lead";

    return NextResponse.json({ 
      success: true, 
      redirectPath 
    });

  } catch (err) {
    console.error("Mailchimp API error:", err);

    return NextResponse.json(
      { error: "Server error or Mailchimp submission failed", details: err.message },
      { status: 500 }
    );
  }
}