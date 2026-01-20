import Header from "@/components/Header";
import Image from "next/image";
import MenuCardsCarousel from "@/components/MenuCardsCarousel";
import DonationBlock from "@/components/DonationBlock";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen text-white overflow-hidden">
        <Header/>
        {/* IMAGE HERO */}
        <Image
          src="/images/hero-jfk.jpg"
          alt="Jean-François Kouassi"
          fill
          priority
          className="object-cover hero-zoom"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENU */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-90">
          <span className="block mb-4 text-sm uppercase tracking-widest">
            PRÉSIDENT JFK - Les Élus au service du peuple (ESP)
          </span>

          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight mb-8">
            Pour une Côte d’Ivoire forte et rassemblée
          </h1>

          {/* BOUTON */}
          <div className="flex gap-6 items-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3
              border-2 border-white px-8 py-4 uppercase font-semibold
              transition duration-700 ease-out
              hover:bg-[#F15A24] hover:border-[#F15A24] hover:text-white"
            >
              Nous Rejoindre
              <span className="text-2xl leading-none flex items-center justify-center translate-y-[1px]">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 2e écran : CARTES */}
      <MenuCardsCarousel />
      <DonationBlock />
    </>
  );
}
