"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-ink-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Inicio">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-700 hover:text-brand-purple-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full gradient-brand text-white text-sm font-medium px-5 py-2.5 shadow-sm hover:opacity-95 transition-opacity"
            >
              Cotizar proyecto
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-ink-700"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 border-t border-ink-100">
            <div className="flex flex-col gap-1 pt-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-base font-medium text-ink-700 hover:bg-ink-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full gradient-brand text-white text-sm font-medium px-5 py-3"
              >
                Cotizar proyecto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
