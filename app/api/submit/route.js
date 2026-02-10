import mailchimp from "@mailchimp/mailchimp_marketing";

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY, // Your API Key
  server: process.env.MAILCHIMP_SERVER, // Correct server prefix from your API Key
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

    // Get first name only
    const firstName = name.split(" ")[0];

    // Determine tag based on score
    const tag = score >= 18 ? "Ready Buyer" : "Nurture Lead";

    // Your single Mailchimp Audience ID
    const audienceId = "974173adad"; // Replace with your Audience ID

    // Add or update subscriber (upsert to prevent duplicates)
    await mailchimp.lists.setListMember(
      audienceId,
      email.toLowerCase(), // email used as unique identifier
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

    // Decide redirect URL
    const redirectUrl =
      score >= 18
        ? "https://www.syncskills.ai/ready-to-buy-lead"
        : "https://www.syncskills.ai/need-nurture-lead";

    return new Response(
      JSON.stringify({ redirect: redirectUrl }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Mailchimp API error:", err);

    return new Response(
      JSON.stringify({ error: "Server error or Mailchimp submission failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
