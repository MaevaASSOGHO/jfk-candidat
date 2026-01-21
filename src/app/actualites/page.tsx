"use client";

import Header from "@/components/Header";
import Image from "next/image";
import type { NewsItem } from "@/components/NewsCardsCarousel";
import NewsCardsCarousel from "@/components/NewsCardsCarousel";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function ActualitesPage() {
  const news: NewsItem[] = [
    {
      media: "/images/accueil/candidat.mp4",
      slug: "communique-01",
      title: "Communiqué : cap sur une campagne de proximité",
      excerpt: "Notre priorité : écouter, comprendre, agir avec des résultats mesurables.",
      category: "Communiqués" as const,
      date: "2026-01-18",
    },
    {
      media: "/images/actualites/cocody.jpg",
      slug: "terrain-01",
      title: "Terrain : échanges à Cocody avec les leaders communautaires",
      excerpt: "Une rencontre tournée vers l’emploi et la sécurité du quotidien.",
      category: "Terrain" as const,
      date: "2026-01-16",
    },
    {
      media: "/images/actualites/universite.mp4",
      slug: "video-01",
      title: "Visite à la jeunesse de l'université méthodiste de Cocody",
      excerpt: "Former, insérer, soutenir l’initiative : la priorité nationale.",
      category: "Vidéos" as const,
      date: "2026-01-10",
    },
    {
      media: "/images/actualites/simone.jpg",
      slug: "presse-01",
      title: "Rencontre avec l'ex-première Dame : Simone GBAGBO",
      excerpt: "Transparence, efficacité et justice : les axes d’action.",
      category: "Presse" as const,
      date: "2026-01-12",
    },
  ];


  const events = [
    {
      slug: "meeting-cocody",
      title: "Rencontre citoyenne — Cocody",
      date: "2026-02-02",
      time: "16:00",
      location: "Cocody (Abidjan)",
      image: "/images/actualites/event.jpg",
      content:
        "Échanges ouverts : emploi des jeunes, sécurité de proximité, pouvoir d’achat. Venez avec vos questions.",
      relatedSlugs: ["terrain-01", "communique-01"],
    },
    {
      slug: "meeting-bouake",
      title: "Échange de terrain — Bouaké",
      date: "2026-02-10",
      time: "10:00",
      location: "Bouaké",
      image: "images/actualites/cocody.jpg",
      content:
        "Rencontre avec les acteurs locaux : priorités, solutions, calendrier d’actions mesurables.",
      relatedSlugs: ["presse-01"],
    },
  ];

  return (
    <main className="bg-white">
        <Header />
      {/* HERO minimal */}
      <section className="relative min-h-screen text-white overflow-hidden">
        <Image
          key="hero-actus"
          src="/images/actus.jpg"
          alt="Actualités"
          fill
          priority
          className="object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-14 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Actualités
            </h1>
            <p className="mt-5 text-white/85 text-base md:text-lg">
              Communiqués, terrain, presse et vidéos.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-44 overflow-hidden rounded-full">
                <div className="h-full grid grid-cols-3">
                  <div className="bg-[#F15A24]" />
                  <div className="bg-white" />
                  <div className="bg-[#007A3D]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉCRAN 1 */}
      <NewsCardsCarousel items={news} baseHref="/actualites" />

      {/* ÉCRAN 2 + Nous inviter */}
      <UpcomingEvents events={events} baseHref="/actualites" />
    </main>
  );
}
