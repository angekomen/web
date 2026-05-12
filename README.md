# Desarrolladora Aangekomen — Web

Sitio corporativo de Desarrolladora Aangekomen, S.A. de C.V.

Stack: **Next.js 16** (App Router, Turbopack) · **Tailwind 4** · **Supabase** (leads + blog) · **Resend** (notificación de leads) · **Vercel** (deploy).

## Estructura

```
app/
  page.tsx              # Home
  nosotros/             # Quiénes somos
  servicios/            # Listado de servicios + complementarios
  servicios/[slug]/     # Detalle dinámico por servicio
  blog/                 # Listado (lee de Supabase blog_posts)
  contacto/             # Form de leads
  api/contacto/         # POST → Supabase + Resend
components/             # Header, Footer, Logo, ContactForm, ServiceIcon
lib/
  services.ts           # Data central de los 7 servicios + complementarios
  supabase/server.ts    # Clientes (admin + public)
supabase/schema.sql     # DDL: leads + blog_posts + RLS
```

## Variables de entorno

Copia `.env.local.example` a `.env.local` y completa:

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — cliente público (lectura de blog).
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` — cliente admin (inserción de leads desde la API route).
- `RESEND_API_KEY`, `LEAD_NOTIFY_TO`, `LEAD_NOTIFY_FROM` — notificación por email de cada lead.

Si no defines Supabase, el sitio sigue funcionando: el blog muestra estado vacío y el formulario solo manda email vía Resend (si está configurado). Si tampoco hay Resend, queda solo log en server.

## Setup

```bash
npm install
cp .env.local.example .env.local   # completar valores
npm run dev
```

En Supabase: abre el SQL editor, pega y ejecuta `supabase/schema.sql`.

## Servicios curados

Los 24 objetos del acta constitutiva se agrupan en 7 áreas comerciales más servicios complementarios. La fuente de verdad es `lib/services.ts` — para editar copy, capacidades o agregar/quitar servicios, ese archivo es el único punto de cambio.

## Branding

- Logo placeholder en `components/Logo.tsx` (SVG hexagonal con degradado morado→azul). Reemplazar por el SVG/PNG oficial cuando esté disponible.
- Paleta en `app/globals.css` bajo `:root` — modificar las variables `--brand-purple-*` y `--brand-blue-*` para ajustar a la guía de marca exacta.

## Validación previa a push

Antes de hacer push:

```bash
npx tsc --noEmit
npm run lint
```

Next.js 16 con Turbopack en dev **no valida tipos** — siempre correr `tsc` antes de subir cambios que toquen tipos.

## Deploy en Vercel

1. Crear proyecto en Vercel apuntando al repo.
2. Cargar todas las variables de entorno del `.env.local.example`.
3. Configurar dominio `aangekomen.mx` (o el que aplique).
