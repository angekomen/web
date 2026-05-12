-- Desarrolladora Aangekomen — Supabase schema
-- Ejecutar en el SQL editor del proyecto Supabase.

create extension if not exists "pgcrypto";

-- ============================
-- Leads (formulario de contacto)
-- ============================
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  service_slug text,
  message text not null,
  source text,
  status text not null default 'new'
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);

alter table public.leads enable row level security;

-- Solo el service role inserta/lee. No exponer anon. La API route usa SERVICE_ROLE_KEY.
drop policy if exists "leads no anon" on public.leads;
create policy "leads no anon"
  on public.leads
  for all
  to anon
  using (false)
  with check (false);

-- ============================
-- Blog
-- ============================
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  slug text not null unique,
  title text not null,
  excerpt text,
  cover_url text,
  content text,
  published_at timestamptz
);

create index if not exists blog_posts_published_at_idx
  on public.blog_posts (published_at desc);

alter table public.blog_posts enable row level security;

drop policy if exists "blog public read published" on public.blog_posts;
create policy "blog public read published"
  on public.blog_posts
  for select
  to anon
  using (published_at is not null and published_at <= now());

-- Trigger updated_at
create or replace function public.tg_set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_updated_at on public.blog_posts;
create trigger set_updated_at
  before update on public.blog_posts
  for each row execute function public.tg_set_updated_at();
