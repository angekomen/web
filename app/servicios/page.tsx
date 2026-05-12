import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, complementaryServices } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Las siete líneas de servicio de Desarrolladora Aangekomen y nuestros servicios complementarios.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-24">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
              Servicios
            </div>
            <h1 className="mt-4 text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
              Siete áreas, una sola desarrolladora.
            </h1>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Cubrimos el ciclo completo de un proyecto: desde el estudio
              técnico inicial hasta la construcción, puesta en marcha y
              mantenimiento de la infraestructura entregada.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 hover:border-brand-purple-500/40 hover:shadow-lg hover:shadow-brand-purple-600/5 transition-all"
              >
                <div className="inline-flex items-center justify-center size-12 rounded-xl gradient-brand text-white">
                  <ServiceIcon name={s.icon} size={22} />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-ink-900 group-hover:text-brand-purple-700 transition-colors">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">
                  {s.tagline}
                </p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-purple-700">
                  Conocer más
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
              Complementarios
            </div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900">
              {complementaryServices.title}
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              {complementaryServices.tagline}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {complementaryServices.items.map((it) => (
              <div
                key={it.title}
                className="rounded-2xl bg-white border border-ink-100 p-6"
              >
                <h3 className="text-base font-semibold text-ink-900">
                  {it.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">
                  {it.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl gradient-brand px-8 py-14 lg:px-14 lg:py-16 text-white text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
              ¿No estás seguro de qué área aplica a tu proyecto?
            </h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">
              Cuéntanos del alcance y te orientamos sobre cómo lo abordaríamos.
            </p>
            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-ink-900 text-sm font-semibold px-6 py-3.5 shadow-lg hover:bg-ink-50 transition-colors"
            >
              Hablemos del proyecto
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
