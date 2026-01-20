"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useMemo, useState } from "react";

type Pillar = {
  id: string;
  title: string;
  short: string;
  accent: "orange" | "green";
  constat: string;
  objectif: string;
  mesures: string[];
  plan: {
    j30: string[];
    j180: string[];
    j365: string[];
  };
  indicateurs: string[];
};

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

export default function ProgrammePage() {
  const pillars = useMemo<Pillar[]>(
    () => [
      {
        id: "emploi",
        title: "Emploi & Jeunesse",
        short: "Former, insérer, soutenir l’entrepreneuriat et l’emploi local.",
        accent: "orange",
        constat:
          "Trop de jeunes peinent à accéder à un premier emploi stable, malgré les compétences et la motivation.",
        objectif:
          "Créer davantage d’opportunités d’insertion et renforcer l’employabilité sur tout le territoire.",
        mesures: [
          "Programme national de stages rémunérés et d’alternance avec les entreprises partenaires",
          "Renforcement des formations courtes qualifiantes (métiers en tension)",
          "Guichet unique pour l’entrepreneuriat : accompagnement, formalisation, microfinancement",
          "Incitations ciblées pour l’embauche des primo-demandeurs",
        ],
        plan: {
          j30: [
            "Audit des dispositifs existants et des besoins par région",
            "Lancement du guichet unique pilote (Abidjan + 2 villes)",
          ],
          j180: [
            "Déploiement des formations courtes dans les filières prioritaires",
            "Premières vagues de stages/alternance avec objectifs chiffrés",
          ],
          j365: [
            "Extension nationale du guichet unique",
            "Évaluation publique des résultats et ajustements",
          ],
        },
        indicateurs: [
          "Nombre de jeunes insérés (emploi/stage/alternance)",
          "Taux de formalisation des micro-entreprises accompagnées",
          "Délai moyen d’accès à une formation qualifiante",
        ],
      },

      {
        id: "pouvoir-achat",
        title: "Pouvoir d’Achat",
        short: "Stabiliser les prix essentiels et protéger les ménages.",
        accent: "green",
        constat:
          "La hausse des coûts de la vie pèse sur les familles : alimentation, transport, énergie.",
        objectif:
          "Mieux maîtriser les prix des produits essentiels et renforcer les filets de protection.",
        mesures: [
          "Renforcement des contrôles et de la transparence des prix",
          "Appui ciblé aux productions locales pour réduire la dépendance aux importations",
          "Mesures de soutien social pour les ménages vulnérables",
          "Amélioration de la logistique et réduction des pertes post-récolte",
        ],
        plan: {
          j30: [
            "Table ronde acteurs (producteurs, transporteurs, distributeurs)",
            "Plan anti-spéculation sur un panier de produits essentiels",
          ],
          j180: [
            "Mise en place d’un tableau public des prix par zone",
            "Soutien logistique aux filières locales (stockage, transport)",
          ],
          j365: [
            "Stabilisation durable via contrats de filière",
            "Bilan des mesures et ajustements",
          ],
        },
        indicateurs: [
          "Évolution du panier de produits essentiels",
          "Taux de pertes post-récolte",
          "Part des produits locaux dans la consommation",
        ],
      },

      {
        id: "securite",
        title: "Sécurité & Cohésion",
        short: "Prévention, proximité et confiance entre citoyens et institutions.",
        accent: "orange",
        constat:
          "Les citoyens demandent plus de sécurité au quotidien et une meilleure prévention.",
        objectif:
          "Renforcer la sécurité de proximité et la cohésion sociale, durablement.",
        mesures: [
          "Renforcement de la police de proximité et dispositifs de prévention",
          "Éclairage public et aménagements sécurisants (zones sensibles)",
          "Programme de médiation communautaire et soutien à la cohésion",
        ],
        plan: {
          j30: ["Cartographie des zones prioritaires", "Plan éclairage express"],
          j180: [
            "Déploiement progressif police de proximité",
            "Programmes de médiation dans les communes pilotes",
          ],
          j365: ["Extension nationale + évaluation", "Renforcement des actions préventives"],
        },
        indicateurs: [
          "Évolution des incidents signalés dans les zones pilotes",
          "Temps moyen de réponse",
          "Taux d’éclairage fonctionnel dans les zones ciblées",
        ],
      },

      {
        id: "education",
        title: "Éducation & Formation",
        short: "Une école qui donne des compétences utiles et des chances réelles.",
        accent: "green",
        constat:
          "Les défis : qualité, orientation, adéquation formation–emploi, infrastructures.",
        objectif:
          "Améliorer la qualité et aligner davantage les parcours sur les besoins du pays.",
        mesures: [
          "Renforcement des fondamentaux et suivi des acquis",
          "Orientation plus tôt + passerelles vers formations techniques",
          "Modernisation progressive des infrastructures scolaires",
        ],
        plan: {
          j30: ["Diagnostic établissements prioritaires", "Plan soutien fondamentaux"],
          j180: ["Pilotes orientation + passerelles", "Chantiers urgents"],
          j365: ["Déploiement élargi + évaluation", "Programme infrastructures renforcé"],
        },
        indicateurs: [
          "Taux de réussite / progression des acquis",
          "Nombre d’élèves orientés vers filières techniques",
          "Nombre d’établissements réhabilités",
        ],
      },

      {
        id: "sante",
        title: "Santé & Protection",
        short: "Accès, qualité, et réponse rapide aux besoins essentiels.",
        accent: "orange",
        constat:
          "Des écarts d’accès aux soins persistent selon les zones, avec des besoins de qualité et d’équipement.",
        objectif:
          "Renforcer l’accès aux soins de proximité et la qualité des services.",
        mesures: [
          "Réhabilitation ciblée des centres de santé prioritaires",
          "Approvisionnement régulier en médicaments essentiels",
          "Renforcement des équipes et de la couverture de proximité",
        ],
        plan: {
          j30: ["Liste des centres prioritaires", "Plan d’approvisionnement urgent"],
          j180: ["Réhabilitations ciblées", "Renforcement équipes dans zones sous-dotées"],
          j365: ["Extension + bilan public", "Renforcement durable logistique santé"],
        },
        indicateurs: [
          "Temps d’accès moyen à un centre de santé",
          "Taux de disponibilité des médicaments essentiels",
          "Nombre de centres réhabilités",
        ],
      },

      {
        id: "gouvernance",
        title: "Gouvernance & Justice",
        short: "Transparence, efficacité, et équité au service de tous.",
        accent: "green",
        constat:
          "Les citoyens attendent des institutions plus transparentes, plus efficaces et plus justes.",
        objectif:
          "Renforcer la confiance par la transparence, la redevabilité et l’équité.",
        mesures: [
          "Publication des résultats et indicateurs de politiques publiques",
          "Simplification de démarches administratives clés",
          "Renforcement de la lutte contre la corruption (contrôles, sanctions)",
          "Promotion de l’égalité d’accès aux services publics",
        ],
        plan: {
          j30: ["Feuille de route transparence", "Démarches prioritaires à simplifier"],
          j180: ["Portail indicateurs + suivi", "Premiers audits et mesures correctives"],
          j365: ["Extension + contrôle régulier", "Bilan annuel public"],
        },
        indicateurs: [
          "Délai moyen de démarches clés",
          "Nombre d’indicateurs publics suivis",
          "Niveau de satisfaction usagers (baromètre)",
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState<string>(pillars[0]?.id ?? "emploi");

  const current = pillars.find((p) => p.id === active) ?? pillars[0];

  const scrollToDetail = (id: string) => {
    setActive(id);
    const el = document.getElementById("pillar-detail");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const accentColor = (p: Pillar) => (p.accent === "orange" ? CI_ORANGE : CI_GREEN);

  return (
    <main className="bg-white text-[#0B1F16]">
        <Header />
      {/* ÉCRAN 1 — HERO PROGRAMME (minimal, cohérent) */}
      <section className="relative min-h-screen text-white overflow-hidden">
        <Image
          key="hero-programme"
          src="/images/hero-programme.jpg" // <-- mets une image dédiée
          alt="Vision & Programme"
          fill
          priority
          className="object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-14 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Vision & Programme
            </h1>

            <p className="mt-5 text-white/85 text-base md:text-lg">
              Des engagements clairs. Des actions mesurables.
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

      {/* ÉCRAN 2 — 6 PILIERS (navigation) */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-black/70">
              Les 6 piliers
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight"
                style ={{ color: CI_GREEN }}>
              Une vision structurée, orientée résultats
            </h2>
            <p className="mt-6 text-base md:text-lg text-black/65 max-w-3xl mx-auto">
              Cliquez sur un pilier pour afficher le détail : constats, objectifs, mesures phares,
              plan 30/180/365 jours et indicateurs.
            </p>
          </div>

          <div className="mt-12 md:mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => {
              const isActive = p.id === active;
              const color = accentColor(p);

              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => scrollToDetail(p.id)}
                  className={[
                    "text-left rounded-3xl border bg-white p-7 md:p-8",
                    "shadow-[0_14px_40px_rgba(0,0,0,0.08)]",
                    "transition-transform duration-300",
                    "hover:scale-[1.02]",
                    isActive ? "ring-4 ring-black/10" : "ring-0",
                    "border-black/10",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full" style={{ background: color }} />
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-black/70 leading-relaxed">{p.short}</p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase">
                    <span style={{ color }}>
                      Voir le détail
                    </span>
                    <span className="text-lg leading-none translate-y-[1px]" style={{ color }}>
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ÉCRAN 3 — DÉTAIL D’UN PILIER */}
      <section className="bg-[#F7F8F7]" id="pillar-detail">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.32em] font-semibold text-black/70">
                Détail du pilier
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight"
                  style={{ color: accentColor(current) }}>
                {current.title}
              </h2>

              <div className="mt-6 flex justify-center">
                <div className="h-1 w-44 overflow-hidden rounded-full">
                  <div className="h-full" style={{ background: accentColor(current) }} />
                </div>
              </div>
            </div>

            {/* Constat / Objectif */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-black/10 bg-white p-7 md:p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg font-extrabold uppercase tracking-widest">
                  Constat
                </h3>
                <p className="mt-4 text-black/70 leading-relaxed">{current.constat}</p>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white p-7 md:p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg font-extrabold uppercase tracking-widest">
                  Objectif
                </h3>
                <p className="mt-4 text-black/70 leading-relaxed">{current.objectif}</p>
              </div>
            </div>

            {/* Mesures phares */}
            <div className="mt-6 rounded-3xl border border-black/10 bg-white p-7 md:p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg font-extrabold uppercase tracking-widest">
                Mesures phares
              </h3>

              <ul className="mt-5 space-y-3">
                {current.mesures.map((m, i) => (
                  <li key={i} className="flex gap-3 text-black/75 leading-relaxed">
                    <span
                      className="mt-2 h-2.5 w-2.5 rounded-full shrink-0"
                      style={{ background: accentColor(current) }}
                    />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan 30 / 180 / 365 */}
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {[
                { label: "30 jours", items: current.plan.j30 },
                { label: "180 jours", items: current.plan.j180 },
                { label: "365 jours", items: current.plan.j365 },
              ].map((block) => (
                <div
                  key={block.label}
                  className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
                >
                  <h4 className="font-extrabold tracking-widest uppercase" style={{ color: accentColor(current) }}>
                    {block.label}
                  </h4>
                  <ul className="mt-4 space-y-2 text-black/70">
                    {block.items.map((it, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-2 w-2 rounded-full bg-black/20 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Impact attendu */}
            <div className="mt-6 rounded-3xl border border-black/10 bg-white p-7 md:p-8 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg font-extrabold uppercase tracking-widest">
                Impact attendu
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {current.indicateurs.map((kpi, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-black/10 p-5 bg-white"
                  >
                    <div
                      className="h-1.5 w-14 rounded-full"
                      style={{ background: accentColor(current) }}
                    />
                    <p className="mt-4 text-black/75 leading-relaxed">{kpi}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini note */}
            {/* <p className="mt-10 text-xs text-black/55 text-center">
              *Contenu à personnaliser : ajustez les mesures, les jalons et les indicateurs selon la version officielle du programme.
            </p> */}
          </div>
        </div>
      </section>
    </main>
  );
}
