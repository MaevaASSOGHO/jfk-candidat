import Image from "next/image";
import Link from "next/link";
import ShareBar from "@/components/ShareBar";
import RelatedLinks from "@/components/RelatedLinks";
import { CONTENT } from "@/lib/content/events";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

export default async function ActualiteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = CONTENT.find((x) => x.slug === slug);
  if (!item) return <div className="max-w-4xl mx-auto px-6 py-24">Introuvable.</div>;

  const related =
    item.relatedSlugs?.map((s) => CONTENT.find((x) => x.slug === s)).filter(Boolean) ?? [];

  return (
    <main className="bg-white text-black">
      {/* HERO cohérent */}
      <section className="relative min-h-[70vh] text-white overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className="object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-14">
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/85">
              Actualités
              {item.type ? ` • ${item.type}` : ""}
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold max-w-4xl">
              {item.title}
            </h1>

            <p className="mt-5 text-white/85 font-semibold">
              {new Date(item.date).toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              {item.time ? ` • ${item.time}` : ""}
              {item.location ? ` • ${item.location}` : ""}
            </p>

            <div className="mt-7 flex">
              <div className="h-1 w-44 overflow-hidden rounded-full">
                <div className="h-full grid grid-cols-3">
                  <div style={{ background: CI_ORANGE }} />
                  <div className="bg-white" />
                  <div style={{ background: CI_GREEN }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <p className="text-black/70 leading-relaxed whitespace-pre-line text-lg">
          {item.content}
        </p>

        <ShareBar title={item.title} path={`/actualites/${item.slug}`} />

        {/* CTA bas de page */}
        <div className="mt-14 rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Vous voulez participer ?
          </h3>
          <p className="mt-4 text-black/70 leading-relaxed">
            Rejoignez l’équipe ou soutenez la campagne.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest border-2 border-black/10 hover:border-black/20 transition"
            >
              Nous rejoindre →
            </Link>

            <Link
              href="/don"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest text-white transition hover:scale-[1.01]"
              style={{ background: CI_ORANGE }}
            >
              Faire un don
            </Link>
          </div>
        </div>

        <RelatedLinks items={related as any} baseHref="/actualites" />
      </section>
    </main>
  );
}
