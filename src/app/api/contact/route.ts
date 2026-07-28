import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

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

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] Missing RESEND_API_KEY");
      return NextResponse.json(
        { ok: false, error: "E-mailová služba není nakonfigurovaná." },
        { status: 500 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "kontakt@simonracko.cz";
    const from =
      process.env.CONTACT_FROM_EMAIL ??
      "Portfolio <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Nová poptávka z webu – ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 12px">Nová zpráva z portfolia</h2>
          <p><strong>Jméno:</strong> ${safeName}</p>
          <p><strong>E-mail:</strong> ${safeEmail}</p>
          <p><strong>Zpráva:</strong></p>
          <p style="white-space:pre-wrap">${safeMessage}</p>
        </div>
      `,
      text: `Nová zpráva z portfolia\n\nJméno: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json(
        { ok: false, error: "Odeslání e-mailu se nepovedlo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected error", error);
    return NextResponse.json(
      { ok: false, error: "Neočekávaná chyba." },
      { status: 500 }
    );
  }
}
