import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const res = await fetch("https://formsubmit.co/el/megugo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: "New Contact Form",
      _captcha: "false",
    }),
  });

  return res.ok
    ? NextResponse.json({ message: "Success" })
    : NextResponse.json({ message: "Failed" }, { status: 500 });
}
