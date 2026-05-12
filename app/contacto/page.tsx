import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes un proyecto en mente? Cuéntanos del alcance, ubicación y plazos. Respondemos con propuesta técnica concreta.",
};

export default function ContactoPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
              Contacto
            </div>
            <h1 className="mt-4 text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
              Cuéntanos del proyecto.
            </h1>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Mientras más concreto el alcance, más útil será nuestra respuesta.
              Te contactamos en menos de 24 horas hábiles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
              <InfoCard
                Icon={Mail}
                title="Correo"
                value="contacto@aangekomen.mx"
                href="mailto:contacto@aangekomen.mx"
              />
              <InfoCard
                Icon={Phone}
                title="Teléfono"
                value="Próximamente"
              />
              <InfoCard
                Icon={MapPin}
                title="Ubicación"
                value="Ciudad de México · Estado de México"
              />
              <div className="rounded-2xl gradient-brand text-white p-7">
                <h3 className="text-lg font-semibold">Tiempos de respuesta</h3>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">
                  Respondemos consultas de proyecto en menos de 24 horas
                  hábiles. Para licitaciones y RFP, agenda una llamada en el
                  formulario.
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  Icon,
  title,
  value,
  href,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      {...(href ? { href } : {})}
      className="block rounded-2xl border border-ink-100 bg-white p-6 hover:border-brand-purple-500/40 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="inline-flex items-center justify-center size-11 rounded-xl gradient-brand text-white shrink-0">
          <Icon size={18} />
        </div>
        <div>
          <div className="text-xs font-semibold tracking-[0.18em] text-ink-500 uppercase">
            {title}
          </div>
          <div className="mt-1 text-base font-semibold text-ink-900">
            {value}
          </div>
        </div>
      </div>
    </Wrap>
  );
}
