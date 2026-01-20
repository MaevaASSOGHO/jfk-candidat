"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

type Category = "Communiqués" | "Terrain" | "Presse" | "Vidéos";

type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string; // "2026-01-18"
  image: string; // public/images/xxx.jpg
};

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

export default function NewsCardsCarousel({
  items,
  baseHref = "/actualites",
}: {
  items: NewsItem[];
  baseHref?: "/actualites" | "/presse";
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const [active, setActive] = useState<Category | "Tous">("Tous");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return items.filter((n) => {
      const okCat = active === "Tous" ? true : n.category === active;
      const okQ =
        !needle ||
        n.title.toLowerCase().includes(needle) ||
        n.excerpt.toLowerCase().includes(needle);
      return okCat && okQ;
    });
  }, [items, active, q]);

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-card='1']");
    const step = firstCard ? firstCard.offsetWidth + 24 : 420;

    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  const categories: (Category | "Tous")[] = [
    "Tous",
    "Communiqués",
    "Terrain",
    "Presse",
    "Vidéos",
  ];

  return (
    <section className="relative w-full text-white overflow-hidden">
      {/* Background image cover (comme ton MenuCardsCarousel) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/5.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        {/* Header + filtres + search */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/80">
              Filtrer & explorer
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
              Dernières publications
            </h2>
            <div className="mt-5 h-1 w-44 overflow-hidden rounded-full">
              <div className="h-full grid grid-cols-3">
                <div style={{ background: CI_ORANGE }} />
                <div className="bg-white" />
                <div style={{ background: CI_GREEN }} />
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="w-full md:w-[380px]">
            <label className="block text-xs uppercase tracking-[0.22em] text-white/70">
              Recherche
            </label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ex : discours, tournée, presse…"
              className="mt-2 w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:ring-4 focus:ring-white/15"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest",
                  "border transition",
                  isActive
                    ? "bg-white text-black border-white"
                    : "bg-white/10 text-white border-white/25 hover:bg-white/15",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Cards rail */}
        <div
          ref={scrollerRef}
          className="
            group/rail
            mt-10
            flex gap-6
            overflow-x-auto overflow-y-visible
            py-6
            snap-x snap-mandatory
            scroll-smooth
          "
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {filtered.map((n) => (
            <Link
              key={n.slug}
              href={`${baseHref}/${n.slug}`}
              data-card="1"
              className="
                snap-start
                min-w-[300px] w-[300px]
                md:min-w-[360px] md:w-[360px]
                lg:min-w-[420px] lg:w-[420px]
                rounded-2xl overflow-hidden
                bg-white text-black
                transition-transform duration-700 ease-out
                relative
                z-10
                hover:scale-[1.09] hover:z-30
                will-change-transform
              "
            >
              {/* Header */}
              <div className="p-7 bg-white">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="text-xs font-extrabold uppercase tracking-[0.22em]"
                    style={{ color: n.category === "Terrain" ? CI_GREEN : CI_ORANGE }}
                  >
                    {n.category}
                  </span>
                  <span className="text-xs font-semibold text-black/55">
                    {new Date(n.date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h3 className="mt-4 text-xl md:text-2xl font-extrabold tracking-tight">
                  {n.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-black/70 leading-relaxed">
                  {n.excerpt}
                </p>
              </div>

              {/* Image */}
              <div className="relative h-[240px] md:h-[300px] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={n.image}
                  alt={n.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 transition"
            aria-label="Précédent"
          >
            <span className="text-2xl leading-none">←</span>
          </button>

          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 transition"
            aria-label="Suivant"
          >
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>
      </div>

      <style>{`
        .group\\/rail::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
