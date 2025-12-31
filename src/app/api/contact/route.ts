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
  return await resend.emails.send(options);
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, subject, message, newsletter } =
      data;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const senderEmail = "hello@tatamihq.com"; // Change this to your verified domain in Resend
    const adminEmail = process.env.ADMIN_EMAIL || "ahmed@tatamihq.com";

    // Email to admin
    await sendEmail({
      from: senderEmail,
      to: adminEmail,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f7f7f7; padding: 15px; border-radius: 4px;">
          ${message.replace(/\n/g, "<br>")}
        </div>
        <p><strong>Newsletter Subscription:</strong> ${newsletter ? "Yes" : "No"}</p>
      `,
    });

    // Confirmation email to user
    await sendEmail({
      from: senderEmail,
      to: email,
      subject: "We've received your message - Tatami",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #025356;">Thank you for contacting us!</h1>
          <p>Dear ${firstName},</p>
          <p>We've received your message regarding "${subject}" and our team will get back to you shortly.</p>
          <p>Here's a copy of your message:</p>
          <div style="background-color: #f7f7f7; padding: 15px; border-radius: 4px; margin: 20px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p>If you have any additional information to share, please feel free to reply to this email.</p>
          ${
            newsletter
              ? `<p>You've also been added to our newsletter! You'll start receiving updates and insights about Tatami and digital rent payments in Qatar.</p>`
              : ``
          }
          <p>Best regards,<br/>The Tatami Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
