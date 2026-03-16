import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { nombre, empresa, email, telefono, ocasion, cantidad, mensaje } =
    await request.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "GALA Web <onboarding@resend.dev>",
    to: ["valensaban@gmail.com"],
    replyTo: email,
    subject: `Nueva consulta: ${nombre}${empresa ? ` — ${empresa}` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #2D2D2D;">
        <div style="background: #B71C1C; padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 22px; letter-spacing: 0.15em;">GALA.</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px;">Nueva consulta desde el sitio web</p>
        </div>
        <div style="padding: 32px; background: #FAF7F5; border: 1px solid #E8E3DF; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E9E9E; width: 140px;">Nombre</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 14px;">${nombre}</td></tr>
            ${empresa ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E9E9E;">Empresa</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 14px;">${empresa}</td></tr>` : ""}
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E9E9E;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 14px;"><a href="mailto:${email}" style="color: #B71C1C;">${email}</a></td></tr>
            ${telefono ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E9E9E;">Teléfono</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 14px;">${telefono}</td></tr>` : ""}
            ${ocasion ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E9E9E;">Ocasión</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 14px;">${ocasion}</td></tr>` : ""}
            ${cantidad ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E9E9E;">Cantidad</td><td style="padding: 10px 0; border-bottom: 1px solid #E8E3DF; font-size: 14px;">${cantidad}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px;">
            <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #9E9E9E; margin-bottom: 8px;">Mensaje</div>
            <div style="font-size: 14px; line-height: 1.7; background: white; padding: 16px; border: 1px solid #E8E3DF;">${mensaje.replace(/\n/g, "<br/>")}</div>
          </div>
        </div>
        <div style="padding: 16px 32px; background: #1A1214; text-align: center;">
          <p style="color: rgba(255,255,255,0.25); font-size: 11px; margin: 0;">GALA Regalos Corporativos — galaregalos.com.ar</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
