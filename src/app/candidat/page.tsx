import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

export default function CandidatPage() {
  const timeline = [
    {
      year: "2008",
      title: "Engagement citoyen",
      desc: "Premières actions de terrain et soutien aux initiatives locales.",
    },
    {
      year: "2012",
      title: "Service public",
      desc: "Expérience institutionnelle, compréhension des enjeux concrets des Ivoiriens.",
    },
    {
      year: "2016",
      title: "Développement & projets",
      desc: "Participation à des projets structurants : emploi, formation, services essentiels.",
    },
    {
      year: "2019",
      title: "Proximité & dialogue",
      desc: "Renforcement du lien avec les quartiers, écoute et solutions pragmatiques.",
    },
    {
      year: "2022",
      title: "Rassemblement",
      desc: "Construction d’une dynamique ouverte : au-delà des clivages, l’intérêt général.",
    },
    {
      year: "2026",
      title: "Candidature",
      desc: "Porter une vision claire : justice, unité, et efficacité au service du peuple.",
    },
  ];

  const values = [
    {
      title: "Intégrité",
      desc: "Agir avec transparence, responsabilité et respect des engagements.",
    },
    {
      title: "Travail",
      desc: "Une culture du résultat : des actions concrètes, mesurables, utiles.",
    },
    {
      title: "Justice",
      desc: "Équité, protection des droits, et accès aux opportunités pour tous.",
    },
    {
      title: "Unité",
      desc: "Rassembler les Ivoiriens, renforcer la cohésion nationale et la paix.",
    },
    {
      title: "Proximité",
      desc: "Écouter, être présent sur le terrain, répondre aux besoins réels.",
    },
    {
      title: "Paix",
      desc: "Promouvoir le dialogue, la stabilité et la sécurité pour tous.",
    },
  ];

  return (
    <main className="bg-white text-[#0B1F16]">
      <Header />
      {/* ÉCRAN 1 — HERO BIO */}
      <section className="relative min-h-screen text-white overflow-hidden">
        {/* IMAGE HERO (différente) */}
        <Image
          src="/images/candidat-hero.jpg" // <-- photo sobre différente
          alt="Le candidat"
          fill
          priority
          className="object-cover hero-zoom"
        />

        {/* OVERLAY identique */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENU identique */}
        <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-14 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Le candidat
            </h1>

            {/* petite ligne drapeau sobre */}
            <div className="mt-6 flex justify-center">
                <div className="h-1 w-40 overflow-hidden rounded-full">
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

      {/* ÉCRAN 2 — TIMELINE DU PARCOURS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="text-center">
            <p
              className="text-xs uppercase tracking-[0.32em] font-semibold"
              style={{ color: CI_GREEN }}
            >
              Parcours
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Un chemin construit sur le terrain
            </h2>
            <p className="mt-6 text-base md:text-lg text-black/65 max-w-3xl mx-auto leading-relaxed">
              Quelques étapes clés, au service des projets utiles et du dialogue avec les citoyens.
            </p>
          </div>

          {/* timeline */}
          <div className="mt-14 md:mt-16">
            <div className="relative">
              {/* ligne verticale */}
              <div
                className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full"
                style={{ background: "rgba(0,0,0,0.08)" }}
              />

              <div className="space-y-10 md:space-y-12">
                {timeline.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div
                      key={item.year}
                      className={`relative flex ${
                        "flex-col md:flex-row"
                      } ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                    >
                      {/* point */}
                      <div
                        className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-3 h-4 w-4 rounded-full ring-4 ring-white"
                        style={{ background: CI_ORANGE }}
                      />

                      {/* carte */}
                      <div
                        className={[
                          "ml-12 md:ml-0",
                          "md:w-[46%]",
                          "rounded-3xl border border-black/10 bg-white",
                          "shadow-[0_14px_40px_rgba(0,0,0,0.08)]",
                          "p-7 md:p-8",
                        ].join(" ")}
                      >
                        <div className="flex items-baseline gap-4">
                          <span
                            className="text-sm font-extrabold tracking-[0.22em]"
                            style={{ color: CI_GREEN }}
                          >
                            {item.year}
                          </span>
                          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-black/70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <p className="mt-10 text-xs text-black/55 text-center">
              *Exemples de jalons — à personnaliser avec les informations réelles du candidat.
            </p> */}
          </div>
        </div>
      </section>

      {/* ÉCRAN 3 — VALEURS */}
      <section className="bg-[#F7F8F7]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="text-center">
            <p
              className="text-xs uppercase tracking-[0.32em] font-semibold"
              style={{ color: CI_GREEN }}
            >
              Valeurs
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Ce qui guide nos actions
            </h2>
            <p className="mt-6 text-base md:text-lg text-black/65 max-w-3xl mx-auto">
              Des principes simples, appliqués avec rigueur et cohérence.
            </p>
          </div>

          <div className="mt-12 md:mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-black/10 bg-white p-7 md:p-8
                shadow-[0_14px_40px_rgba(0,0,0,0.08)]
                transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ background: CI_ORANGE }}
                  />
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {v.title}
                  </h3>
                </div>
                <p className="mt-4 text-black/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉCRAN 4 — POURQUOI NOUS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* bloc texte */}
            <div>
              <p
                className="text-xs uppercase tracking-[0.32em] font-semibold"
                style={{ color: CI_GREEN }}
              >
                Pourquoi nous
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
                LES ÉLUS AU SERVICE DU PEUPLE{" "}
                <span style={{ color: CI_ORANGE }}>(ESP)</span>
              </h2>

              <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">
                ESP, c’est l’engagement de rassembler au-delà des clivages, avec une liberté
                d’agir guidée par l’intérêt général. Une dynamique ouverte, pragmatique et
                tournée vers les résultats : sécurité, emploi, éducation, santé, pouvoir d’achat.
              </p>

              <p className="mt-5 text-base md:text-lg text-black/70 leading-relaxed">
                Notre méthode : écouter, proposer, agir — et rendre des comptes.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/don"
                  className="inline-flex items-center justify-center rounded-2xl px-7 py-4 font-bold uppercase
                  text-white border-2 transition-transform duration-300 hover:scale-105"
                  style={{ background: CI_ORANGE, borderColor: CI_ORANGE }}
                >
                  Faire un don
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl px-7 py-4 font-bold uppercase
                  border-2 transition-transform duration-300 hover:scale-105"
                  style={{ borderColor: "rgba(0,0,0,0.12)" }}
                >
                  Nous rejoindre
                </Link>
              </div>
            </div>

            {/* bloc visuel / citation */}
            <div className="rounded-[32px] border border-black/10 bg-[#007A3D]/[0.06] p-10 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <p className="text-xl md:text-2xl font-extrabold leading-snug text-[#0B1F16]">
                “La politique doit redevenir un service : proche, juste et utile.”
              </p>

              <div className="mt-6 h-[2px] w-20" style={{ background: CI_ORANGE }} />

              <p className="mt-6 text-black/70 leading-relaxed">
                Une campagne de conviction, basée sur la confiance, l’exemplarité et l’efficacité.
                Ensemble, nous pouvons bâtir une Côte d’Ivoire plus forte.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full" style={{ background: CI_GREEN }} />
                <p className="text-sm font-semibold text-black/70">
                  Jean-François Kouassi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
