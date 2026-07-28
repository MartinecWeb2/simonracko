import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Neplatná data formuláře." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Neplatný e-mail." },
        { status: 400 }
      );
    }

    // Ready for email provider integration (Resend, Nodemailer, etc.)
    console.info("[contact]", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Neočekávaná chyba." },
      { status: 500 }
    );
  }
}
