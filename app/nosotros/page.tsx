import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers, ShieldCheck, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a Desarrolladora Aangekomen: una empresa con capacidad técnica integral para construir infraestructura, edificación y servicios urbanos.",
};

const principles = [
  {
    icon: Target,
    title: "Misión",
    body: "Construir infraestructura y desarrollos que sirvan durante décadas, con criterios técnicos rigurosos y visión de largo plazo.",
  },
  {
    icon: Compass,
    title: "Visión",
    body: "Ser una desarrolladora de referencia en México para proyectos de obra civil, edificación y servicios urbanos a gran escala.",
  },
  {
    icon: ShieldCheck,
    title: "Valores",
    body: "Responsabilidad técnica, integridad operativa y compromiso con la calidad estructural en cada proyecto.",
  },
  {
    icon: Layers,
    title: "Alcance",
    body: "Capacidad operativa para coordinar obra civil, sistemas energéticos, hidráulica, telecom y servicios urbanos desde un mismo equipo.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
              Nosotros
            </div>
            <h1 className="mt-4 text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
              Una desarrolladora con
              <span className="text-gradient-brand"> visión de largo plazo</span>.
            </h1>
            <p className="mt-7 text-lg text-ink-500 leading-relaxed">
              Desarrolladora Aangekomen, S.A. de C.V. es una constructora
              mexicana con capacidad técnica para proyectos públicos y privados
              en obra civil, edificación, infraestructura energética e
              hidráulica, telecomunicaciones y servicios urbanos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
                Quiénes somos
              </div>
              <h2 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900">
                El nombre tiene historia.
              </h2>
              <p className="mt-6 text-lg text-ink-500 leading-relaxed">
                <em>Aangekomen</em> es la palabra holandesa para “hemos llegado”.
                La elegimos porque resume cómo entendemos nuestro trabajo:
                construir significa terminar, entregar y dejar algo en pie. No
                empezar y abandonar — llegar.
              </p>
              <p className="mt-5 text-lg text-ink-500 leading-relaxed">
                Operamos como desarrolladora integral: capacidad técnica para
                planear, ejecutar y dar mantenimiento a obras complejas, con un
                solo equipo coordinado.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-ink-100 bg-white p-7"
                >
                  <div className="inline-flex items-center justify-center size-11 rounded-xl gradient-brand text-white">
                    <p.icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-ink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
              Capacidad
            </div>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900">
              Lo que podemos ejecutar.
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              Nuestro objeto social cubre 24 áreas de operación técnica. En la
              práctica, esto se traduce en siete líneas de servicio activas y
              un set de servicios complementarios.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              ["Obra civil", "Carreteras, puentes, estructuras"],
              ["Edificación", "Vivienda, comercial, industrial"],
              ["Energía", "Eléctrica, alumbrado, redes"],
              ["Hidráulica", "Agua, gas, climatización"],
              ["Telecom", "Redes, antenas, señalización"],
              ["Servicios urbanos", "Residuos, jardinería, mobiliario"],
              ["Consultoría", "Estudios, supervisión, concesiones"],
              ["Complementarios", "Limpieza, transporte, eventos"],
            ].map(([title, sub]) => (
              <div
                key={title}
                className="rounded-xl bg-white border border-ink-100 p-5"
              >
                <div className="text-sm font-semibold text-ink-900">
                  {title}
                </div>
                <div className="mt-1 text-xs text-ink-500">{sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple-700 hover:text-brand-purple-900"
            >
              Ver todos los servicios
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
