type ContactPayload = {
  fullName: string;
  email: string;
  discussion: string;
};

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const payload = body as Partial<ContactPayload>;
  return (
    typeof payload.fullName === "string" &&
    payload.fullName.trim().length > 0 &&
    typeof payload.email === "string" &&
    payload.email.trim().length > 0 &&
    typeof payload.discussion === "string" &&
    payload.discussion.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const accessKey = process.env.EMAIL_ACCESS_KEY;

    if (!accessKey) {
      return Response.json(
        { error: "Missing EMAIL_ACCESS_KEY." },
        { status: 500 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    if (!isValidPayload(body)) {
      return Response.json(
        { error: "fullName, email, and discussion are required." },
        { status: 400 },
      );
    }

    const { fullName, email, discussion } = body;

    const web3formsPayload = {
      access_key: accessKey,
      name: fullName.trim(),
      email: email.trim(),
      message: discussion.trim(),
      subject: `New contact request from ${fullName.trim()}`,
      from_name: "devstackedmagazine",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(web3formsPayload),
    });

    // Safely parse response - Web3Forms can return HTML on errors
    const responseText = await response.text();
    console.log("=== WEB3FORMS STATUS:", response.status);
    console.log("=== WEB3FORMS RESPONSE:", responseText);
    let result: { success?: boolean; message?: string } = {};
    try {
      result = JSON.parse(responseText);
    } catch {
      return Response.json(
        {
          error:
            "Web3Forms returned an unexpected response. Check your access key.",
        },
        { status: 500 },
      );
    }

    if (!response.ok || !result.success) {
      return Response.json(
        { error: result.message || "Failed to send email." },
        { status: 400 },
      );
    }

    return Response.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 500 });
  }
}
