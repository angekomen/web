import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Servicio no encontrado" };
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-16 lg:pt-20 lg:pb-20">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900 transition-colors"
          >
            <ArrowLeft size={14} />
            Todos los servicios
          </Link>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center justify-center size-14 rounded-2xl gradient-brand text-white">
                <ServiceIcon name={service.icon} size={26} />
              </div>
              <h1 className="mt-6 text-4xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
                {service.title}
              </h1>
              <p className="mt-5 text-lg text-ink-500 leading-relaxed max-w-2xl">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
                Descripción
              </div>
              <h2 className="mt-3 text-3xl lg:text-4xl font-semibold tracking-tight text-ink-900">
                Cómo lo abordamos.
              </h2>
              <p className="mt-6 text-lg text-ink-500 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-ink-100 bg-white p-7">
                <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
                  Capacidades
                </div>
                <ul className="mt-5 space-y-3.5">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex gap-3 text-sm text-ink-700">
                      <CheckCircle2
                        size={18}
                        className="text-brand-purple-600 shrink-0 mt-0.5"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-ink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
                Siguiente servicio
              </div>
              <Link
                href={`/servicios/${nextService.slug}`}
                className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-ink-900 hover:text-brand-purple-700 transition-colors"
              >
                {nextService.title}
                <ArrowRight size={18} />
              </Link>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full gradient-brand text-white text-sm font-semibold px-6 py-3.5 shadow-lg hover:opacity-95 transition-opacity"
            >
              Cotizar este servicio
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
