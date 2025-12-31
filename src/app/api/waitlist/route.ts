import { NextResponse } from "next/server";
import { Resend } from "resend";

// Define a proper type for email options
interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

// Initialize Resend with API key from environment variables or use the provided key as fallback
const resendApiKey =
  process.env.RESEND_API_KEY || "re_Br5FD9AK_LxH449neRbjX6z71dMdWYHBN";
const resend = new Resend(resendApiKey);

// Helper function to send emails (or log them in development)
const sendEmail = async (options: EmailOptions) => {
  // if (process.env.NODE_ENV === "production") {
  return await resend.emails.send(options);
  // } else {
  //   // For development/testing, use console output instead
  //   console.log("========== EMAIL SENT ==========");
  //   console.log("To:", options.to);
  //   console.log("From:", options.from);
  //   console.log("Subject:", options.subject);
  //   console.log("Content:", options.html);
  //   console.log("===============================");
  //   return { id: "test-message-id" };
  // }
};

// Verify Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
    }
  );

  const data = await response.json();
  return data.success;
}

export async function POST(request: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      company,
      userType,
      unitsManaged,
      hearAbout,
      comments,
      turnstileToken, // Get the token from request
    } = await request.json();

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Security verification failed" },
        { status: 400 }
      );
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: "Security verification failed" },
        { status: 403 }
      );
    }

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const senderEmail = "hello@tatamihq.com"; // Default sender from Resend
    const adminEmail = process.env.ADMIN_EMAIL || "ahmed@tatamihq.com";

    // Email to admin
    await sendEmail({
      from: senderEmail,
      to: adminEmail,
      subject: "New Waitlist Submission",
      html: `
        <h1>New Waitlist Submission</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>User Type:</strong> ${userType}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        ${
          userType === "property-manager"
            ? `<p><strong>Units Managed:</strong> ${unitsManaged || "N/A"}</p>`
            : ""
        }
        <p><strong>How they heard about us:</strong> ${hearAbout || "N/A"}</p>
        <p><strong>Additional Comments:</strong> ${comments || "N/A"}</p>
      `,
    });

    // Confirmation email to user
    await sendEmail({
      from: senderEmail,
      to: email,
      subject: "Thank you for joining the Tatami waitlist!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #025356;">Thank you for joining our waitlist!</h1>
          <p>Dear ${firstName},</p>
          <p>Thank you for your interest in Tatami! We're excited to have you on our waitlist.</p>
          <p>We're working hard to build the future of rent payments, and we'll notify you as soon as we launch.</p>
          <p>In the meantime, if you have any questions, feel free to reach out to us at <a href="mailto:hello@tatamihq.com">hello@tatamihq.com</a>.</p>
          <p>Best regards,<br/>The Tatami Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing waitlist submission:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
