import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSupabasePublic, type BlogPost } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notas, casos y reflexiones del equipo de Desarrolladora Aangekomen sobre construcción, infraestructura y desarrollo urbano.",
};

export const revalidate = 300;

async function getPosts(): Promise<BlogPost[]> {
  const supabase = getSupabasePublic();
  if (!supabase) return [];
  const { data } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, cover_url, content, published_at, created_at")
    .not("published_at", "is", null)
    .order("published_at", { ascending: false })
    .limit(24);
  return (data as BlogPost[] | null) ?? [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-[0.18em] text-brand-purple-700 uppercase">
              Blog
            </div>
            <h1 className="mt-4 text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 leading-[1.05]">
              Notas desde la obra.
            </h1>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Casos, reflexiones técnicas y novedades del equipo. Publicamos
              cuando hay algo útil que compartir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-2xl border border-ink-100 bg-white overflow-hidden hover:border-brand-purple-500/40 transition-colors"
                >
                  <div className="aspect-[16/10] bg-ink-100 relative overflow-hidden">
                    {post.cover_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.cover_url}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 gradient-brand opacity-70" />
                    )}
                  </div>
                  <div className="p-6">
                    <time className="text-xs text-ink-500">
                      {new Date(
                        post.published_at ?? post.created_at,
                      ).toLocaleDateString("es-MX", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900 group-hover:text-brand-purple-700 transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-3 text-sm text-ink-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-ink-200 bg-white p-12 lg:p-16 text-center">
      <div className="mx-auto inline-flex items-center justify-center size-14 rounded-2xl gradient-brand text-white">
        <ArrowRight size={22} />
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-ink-900">
        Próximamente.
      </h3>
      <p className="mt-3 text-ink-500 max-w-md mx-auto">
        Estamos preparando el primer contenido. Mientras tanto, conoce nuestras
        áreas de servicio.
      </p>
      <Link
        href="/servicios"
        className="mt-8 inline-flex items-center gap-2 rounded-full gradient-brand text-white text-sm font-semibold px-6 py-3 shadow-lg hover:opacity-95 transition-opacity"
      >
        Ver servicios
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
