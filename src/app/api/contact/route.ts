import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "kunalkumarofficial31@gmail.com",
      subject: `New Message: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}