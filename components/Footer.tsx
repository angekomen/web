import Link from "next/link";
import { Logo } from "./Logo";
import { services } from "@/lib/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-100 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Logo invert />
            <p className="mt-6 text-sm text-ink-300 leading-relaxed max-w-sm">
              Desarrolladora Aangekomen, S.A. de C.V. Construimos
              infraestructura, edificios y servicios urbanos con visión a largo
              plazo.
            </p>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-ink-300 uppercase mb-5">
              Servicios
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-sm text-ink-100 hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-ink-300 uppercase mb-5">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-ink-100">
              <li>
                <a
                  href="mailto:contacto@aangekomen.mx"
                  className="hover:text-white transition-colors"
                >
                  contacto@aangekomen.mx
                </a>
              </li>
              <li className="text-ink-300">Ciudad de México · Estado de México</li>
              <li className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Cotizar un proyecto →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-300">
          <p>© {year} Desarrolladora Aangekomen, S.A. de C.V. Todos los derechos reservados.</p>
          <p>Construido en México.</p>
        </div>
      </div>
    </footer>
  );
}
