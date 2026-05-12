import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5 text-xs font-medium text-ink-700">
                <span className="size-1.5 rounded-full bg-brand-purple-600" />
                Desarrolladora · S.A. de C.V.
              </div>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
                Construimos <br className="hidden sm:block" />
                <span className="text-gradient-brand">tu futuro</span>.
              </h1>
              <p className="mt-7 max-w-xl text-lg text-ink-500 leading-relaxed">
                Obras públicas y privadas, edificación, infraestructura
                energética e hidráulica, telecomunicaciones y servicios
                urbanos. Capacidad técnica integral, criterio de largo plazo.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full gradient-brand text-white text-sm font-semibold px-6 py-3.5 shadow-lg shadow-brand-purple-600/20 hover:opacity-95 transition-opacity"
                >
                  Cotizar un proyecto
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white text-sm font-semibold text-ink-900 px-6 py-3.5 hover:bg-ink-50 transition-colors"
                >
                  Ver servicios
                </Link>
              </div>
              <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
                <div>
                  <dt className="text-3xl font-semibold text-ink-900">7</dt>
                  <dd className="mt-1 text-xs text-ink-500 uppercase tracking-wider">
                    Áreas de servicio
                  </dd>
                </div>
                <div>
                  <dt className="text-3xl font-semibold text-ink-900">24</dt>
                  <dd className="mt-1 text-xs text-ink-500 uppercase tracking-wider">
                    Capacidades técnicas
                  </dd>
                </div>
                <div>
                  <dt className="text-3xl font-semibold text-ink-900">MX</dt>
                  <dd className="mt-1 text-xs text-ink-500 uppercase tracking-wider">
                    Cobertura nacional
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5 animate-fade-up">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
              Qué hacemos
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-ink-900">
              Una desarrolladora con alcance integral.
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              Operamos en siete áreas que cubren el ciclo completo de un
              desarrollo: desde la obra civil hasta los sistemas que la hacen
              funcionar.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group relative rounded-2xl border border-ink-100 bg-white p-7 hover:border-brand-purple-500/40 hover:shadow-lg hover:shadow-brand-purple-600/5 transition-all"
              >
                <div className="inline-flex items-center justify-center size-12 rounded-xl gradient-brand text-white">
                  <ServiceIcon name={s.icon} size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink-900 group-hover:text-brand-purple-700 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed line-clamp-3">
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

      {/* VALORES / DIFERENCIADORES */}
      <section className="py-24 lg:py-32 bg-ink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
                Por qué Aangekomen
              </div>
              <h2 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900">
                Capacidad técnica con criterio de largo plazo.
              </h2>
              <p className="mt-6 text-lg text-ink-500 leading-relaxed">
                Aangekomen es holandés para “hemos llegado”. Es el nombre que
                elegimos porque construir es eso: dejar algo terminado, en pie y
                listo para servir durante décadas.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Alcance multidisciplinario",
                  body: "Ejecutamos obra civil, edificación, sistemas energéticos, hidráulica y telecom desde un mismo equipo coordinado.",
                },
                {
                  title: "Calidad estructural",
                  body: "Diseño y construcción de estructuras de hormigón armado y metálicas con criterios de durabilidad y seguridad.",
                },
                {
                  title: "Operación y mantenimiento",
                  body: "No solo construimos: conservamos, mantenemos y explotamos la infraestructura que entregamos.",
                },
                {
                  title: "Visión de proyecto integral",
                  body: "Acompañamos desde la planeación y estudios hasta la dirección técnica y supervisión de obra.",
                },
              ].map((it) => (
                <div
                  key={it.title}
                  className="rounded-2xl bg-white border border-ink-100 p-7"
                >
                  <CheckCircle2
                    className="text-brand-purple-600"
                    size={22}
                  />
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                    {it.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl gradient-brand px-8 py-16 lg:px-16 lg:py-20 text-white">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(900px_300px_at_0%_0%,rgba(255,255,255,0.4),transparent)]" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                  ¿Tienes un proyecto en mente?
                </h2>
                <p className="mt-5 text-lg text-white/80 max-w-xl leading-relaxed">
                  Cuéntanos del alcance, ubicación y plazos. Te respondemos con
                  una propuesta técnica concreta.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink-900 text-sm font-semibold px-7 py-4 shadow-lg hover:bg-ink-50 transition-colors"
                >
                  Iniciar conversación
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      <div className="absolute inset-0 rounded-3xl gradient-brand opacity-90" />
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_50%),radial-gradient(circle_at_90%_90%,rgba(0,0,0,0.25),transparent_50%)]" />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <defs>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />
        <g opacity="0.95">
          <path
            d="M120 90 L180 120 L180 180 L120 210 L60 180 L60 120 Z"
            fill="rgba(255,255,255,0.18)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />
          <path
            d="M240 160 L300 190 L300 250 L240 280 L180 250 L180 190 Z"
            fill="rgba(255,255,255,0.12)"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
          />
        </g>
      </svg>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
        <div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-white/70">
            Capacidad
          </div>
          <div className="text-2xl font-semibold mt-1">Integral</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] tracking-[0.2em] uppercase text-white/70">
            Cobertura
          </div>
          <div className="text-2xl font-semibold mt-1">Nacional</div>
        </div>
      </div>
    </div>
  );
}
