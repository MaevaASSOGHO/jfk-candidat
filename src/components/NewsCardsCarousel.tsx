"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Category = "Communiqués" | "Terrain" | "Presse" | "Vidéos";

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  media: string;      // image OU vidéo
  poster?: string;    // si vidéo
};

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export default function NewsCardsCarousel({
  items,
  baseHref = "/actualites",
}: {
  items: NewsItem[];
  baseHref?: "/actualites" | "/presse";
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  // iOS autoplay safe (ne touche PAS au layout)
  useEffect(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return;
      v.muted = true;
      v.playsInline = true;
      v.loop = true;
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      v.setAttribute("webkit-playsinline", "");
      (v as any).webkitPlaysInline = true;
      v.play().catch(() => {});
    });
  }, [filtered.length]);

  return (
    <section className="relative w-full text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/blason-civ.png')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/80">
              Filtrer & explorer
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
              Dernières publications
            </h2>
            <div className="mt-5 h-1 w-44 rounded-full overflow-hidden grid grid-cols-3">
              <div className="bg-[#F15A24]" />
              <div className="bg-white" />
              <div className="bg-[#007A3D]" />
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
              className="mt-2 w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest border transition ${
                active === c
                  ? "bg-white text-black border-white"
                  : "bg-white/10 text-white border-white/25 hover:bg-white/15"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          ref={scrollerRef}
          className="group/rail mt-10 flex gap-6 overflow-x-auto py-6 snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
        >
          {filtered.map((n, idx) => {
            const video = isVideo(n.media);

            return (
              <Link
                key={n.slug}
                href={`${baseHref}/${n.slug}`}
                data-card="1"
                className="snap-start min-w-[300px] w-[300px] md:min-w-[360px] md:w-[360px] lg:min-w-[420px] lg:w-[420px]
                           rounded-2xl overflow-hidden bg-white text-black relative transition-transform duration-700
                           hover:scale-[1.09] hover:z-30"
              >
                {/* Texte */}
                <div className="p-7 bg-white">
                  <div className="flex justify-between text-xs font-semibold text-black/55">
                    <span
                      className="font-extrabold uppercase tracking-[0.22em]"
                      style={{ color: n.category === "Terrain" ? CI_GREEN : CI_ORANGE }}
                    >
                      {n.category}
                    </span>
                    <span>
                      {new Date(n.date).toLocaleDateString("fr-FR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl md:text-2xl font-extrabold">
                    {n.title}
                  </h3>
                  <p className="mt-4 text-black/70">
                    {n.excerpt}
                  </p>
                </div>

                {/* MEDIA — FULL BLEED, SANS MARGE */}
                <div className="relative h-[240px] md:h-[300px] bg-black overflow-hidden">
                  {video ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[idx] = el;
                      }}
                      src={n.media}
                      poster={n.poster}
                      muted
                      playsInline
                      loop
                      autoPlay
                      preload="auto"
                      disablePictureInPicture
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={n.media}
                      alt={n.title}
                      className="absolute inset-0 w-full h-full object-cover block"
                      loading="lazy"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="mt-2 flex justify-between">
          <button
            onClick={() => scrollByCards("left")}
            className="h-12 w-12 rounded-full border border-white/40 bg-white/10"
          >
            ←
          </button>
          <button
            onClick={() => scrollByCards("right")}
            className="h-12 w-12 rounded-full border border-white/40 bg-white/10"
          >
            →
          </button>
        </div>
      </div>

      <style>{`
        .group\\/rail::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
