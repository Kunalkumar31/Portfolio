import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // Your Web3Forms API key
    const WEB3FORMS_API_KEY = process.env.WEB3FORMS_API_KEY;

    const formData = {
      access_key: WEB3FORMS_API_KEY,
      name,
      email,
      message,
      subject: "New Contact Form Submission",
      redirect: "/", //redirect URL after submit
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (res.ok && result.success) {
      return NextResponse.json({ message: "Success" });
    } else {
      console.error("Web3Forms error:", result);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
