"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";

type CardItem = {
  href: string;
  title: string;
  desc: string;
  videoSrc: string;
  poster?: string;
  tone?: "neutral" | "blue" | "sand";
};

export default function MenuCardsCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo<CardItem[]>(
    () => [
      {
        href: "/candidat",
        title: "LE CANDIDAT",
        desc: "Découvrez le parcours, la vision et les engagements de Jean-François Kouassi.",
        videoSrc: "/videos/candidat.mp4",
        poster: "/images/candidat.jpg",
        tone: "neutral",
      },
      {
        href: "/programme",
        title: "LE PROGRAMME",
        desc: "Les priorités, les mesures clés et la feuille de route pour une Côte d’Ivoire forte.",
        videoSrc: "/videos/programme.mp4",
        poster: "/images/programme.jpg",
        tone: "blue",
      },
      {
        href: "/actualites",
        title: "ACTUALITÉS",
        desc: "Suivez les déplacements, annonces et temps forts de la campagne.",
        videoSrc: "/videos/actualites.mp4",
        poster: "/images/actualites.jpg",
        tone: "sand",
      },
      {
        href: "/presse",
        title: "PRESSE",
        desc: "Communiqués, interviews, kit média et ressources téléchargeables.",
        videoSrc: "/videos/presse.mp4",
        poster: "/images/presse.jpg",
        tone: "neutral",
      },
      {
        href: "/contact",
        title: "CONTACT",
        desc: "Rejoignez l’équipe, proposez une idée ou contactez le siège de campagne.",
        videoSrc: "/videos/contact.mp4",
        poster: "/images/contact.jpg",
        tone: "blue",
      },
    ],
    []
  );

  const toneClass = (tone?: CardItem["tone"]) => {
    if (tone === "blue") return "bg-[#7EB9FF]";
    if (tone === "sand") return "bg-[#F0D3A8]";
    return "bg-[#D6D8DC]";
  };

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-card='1']");
    const step = firstCard ? firstCard.offsetWidth + 24 : 420;

    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="relative w-full text-white">
      {/* BACKGROUND IMAGE (cover) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/5.jpg')" }} // <-- mets ton image ici
      />
      {/* overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        {/* Cards row */}
        <div
          ref={scrollerRef}
          className="
            group/rail
            flex gap-6
            overflow-x-auto overflow-y-visible
            py-6
            snap-x snap-mandatory
            scroll-smooth
          "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
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
              <div className={`p-7 ${toneClass(it.tone)}`}>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-[0.18em] uppercase">
                  {it.title}
                </h3>
                <p className="mt-4 text-base md:text-lg text-black/80 leading-relaxed">
                  {it.desc}
                </p>
              </div>

              {/* Video */}
              <div className="relative h-[280px] md:h-[340px] bg-black">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={it.videoSrc}
                  poster={it.poster}
                  muted
                  playsInline
                  loop
                  autoPlay
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {/* Arrows (sous les cartes) */}
        <div className="mt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            className="
              inline-flex items-center justify-center
              h-12 w-12 rounded-full
              border border-white/40
              bg-white/10 hover:bg-white/20
              transition
            "
            aria-label="Précédent"
          >
            <span className="text-2xl leading-none">←</span>
          </button>

          <button
            type="button"
            onClick={() => scrollByCards("right")}
            className="
              inline-flex items-center justify-center
              h-12 w-12 rounded-full
              border border-white/40
              bg-white/10 hover:bg-white/20
              transition
            "
            aria-label="Suivant"
          >
            <span className="text-2xl leading-none">→</span>
          </button>
        </div>
      </div>

      {/* Hide scrollbar (webkit) */}
      <style>{`
        .group\\/rail::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
