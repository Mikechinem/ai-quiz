import mailchimp from "@mailchimp/mailchimp_marketing";
import { sendCapiEvent } from "@/lib/metaCapi";

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
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
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

    // 🔥 CAPI EVENT (server-side Meta tracking)
    const eventID = email; // same ID should be used in Pixel for deduplication

    await sendCapiEvent({
      eventName: "Lead",
      email,
      phone,
      eventID,
      customData: { score },
    });
    
    // 🔥 Server-side redirect
    const redirectPath =
      score >= 18
        ? "/ready-to-buy-lead"
        : "/need-nurture-lead";

    return NextResponse.redirect(new URL(redirectPath, req.url));

  } catch (err) {
    console.error("Mailchimp API error:", err);

    return new Response(
      JSON.stringify({ error: "Server error or Mailchimp submission failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
