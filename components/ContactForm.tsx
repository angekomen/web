"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim() || null,
      company: String(fd.get("company") ?? "").trim() || null,
      service_slug: String(fd.get("service_slug") ?? "") || null,
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-ink-100 bg-white p-10 text-center">
        <div className="mx-auto inline-flex items-center justify-center size-14 rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-ink-900">
          Recibimos tu mensaje.
        </h3>
        <p className="mt-3 text-ink-500 max-w-md mx-auto">
          Un miembro del equipo te contactará en las próximas 24 horas hábiles.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-brand-purple-700 hover:text-brand-purple-900"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-ink-100 bg-white p-7 lg:p-10 space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Nombre completo" name="name" required />
        <Field label="Correo" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Teléfono" name="phone" type="tel" />
        <Field label="Empresa" name="company" />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="service_slug"
          className="text-sm font-medium text-ink-900"
        >
          Área de interés
        </label>
        <select
          id="service_slug"
          name="service_slug"
          defaultValue=""
          className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand-purple-500/40 focus:border-brand-purple-500"
        >
          <option value="">Selecciona un área…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="otro">Otro / no estoy seguro</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink-900">
          Cuéntanos del proyecto
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Alcance aproximado, ubicación, plazos estimados…"
          className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-500/40 focus:border-brand-purple-500"
        />
      </div>

      {errorMsg && (
        <div className="rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-brand text-white text-sm font-semibold px-6 py-4 shadow-lg shadow-brand-purple-600/20 hover:opacity-95 disabled:opacity-70 transition-opacity"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            Enviar mensaje
            <Send size={16} />
          </>
        )}
      </button>

      <p className="text-xs text-ink-500 text-center">
        Al enviar aceptas que te contactemos por correo o teléfono respecto a tu
        consulta.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink-900">
        {label}
        {required && <span className="text-brand-purple-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-brand-purple-500/40 focus:border-brand-purple-500"
      />
    </div>
  );
}
