import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase/server";

const LeadSchema = z.object({
  name: z.string().min(2, "Nombre demasiado corto").max(120),
  email: z.string().email("Correo inválido").max(160),
  phone: z.string().max(40).nullable().optional(),
  company: z.string().max(160).nullable().optional(),
  service_slug: z.string().max(80).nullable().optional(),
  message: z.string().min(10, "Mensaje muy corto").max(4000),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Cuerpo de la petición inválido." },
      { status: 400 },
    );
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Datos inválidos." },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("leads").insert({
      ...lead,
      source: "web:contacto",
    });
    if (error) {
      console.error("supabase insert lead error", error);
    }
  } else {
    console.warn("Supabase not configured — skipping persist");
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFY_TO;
  const notifyFrom = process.env.LEAD_NOTIFY_FROM ?? "Aangekomen <onboarding@resend.dev>";
  if (resendKey && notifyTo) {
    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: notifyFrom,
        to: notifyTo.split(",").map((s) => s.trim()),
        subject: `Nuevo lead — ${lead.name}`,
        replyTo: lead.email,
        text: [
          `Nombre: ${lead.name}`,
          `Correo: ${lead.email}`,
          `Teléfono: ${lead.phone ?? "—"}`,
          `Empresa: ${lead.company ?? "—"}`,
          `Servicio: ${lead.service_slug ?? "—"}`,
          "",
          "Mensaje:",
          lead.message,
        ].join("\n"),
      });
    } catch (err) {
      console.error("resend send error", err);
    }
  }

  return NextResponse.json({ ok: true });
}
