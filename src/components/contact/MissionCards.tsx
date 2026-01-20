"use client";

import { useMemo } from "react";
import type { MissionKey } from "@/app/contact/page";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

type Mission = {
  key: MissionKey;
  title: string;
  desc: string;
  bullets: string[];
  badge: string;
};

export default function MissionCards({
  selected,
  onPick,
}: {
  selected: MissionKey | null;
  onPick: (m: MissionKey) => void;
}) {
  const missions = useMemo<Mission[]>(
    () => [
      {
        key: "terrain",
        title: "Terrain",
        desc: "Porte à porte, sensibilisation, mobilisation locale.",
        bullets: ["Porte à porte", "Réunions de quartier", "Accueil au QG"],
        badge: "Action",
      },
      {
        key: "communication",
        title: "Communication",
        desc: "Partage, relais, community, création de contenus.",
        bullets: ["Réseaux sociaux", "Diffusion des communiqués", "Visuels / vidéo"],
        badge: "Visibilité",
      },
      {
        key: "logistique",
        title: "Logistique",
        desc: "Organisation, matériel, coordination d’équipes.",
        bullets: ["Planification", "Matériel", "Coordination"],
        badge: "Organisation",
      },
      {
        key: "observateur",
        title: "Observateur",
        desc: "Jour de vote : présence, remontées, vigilance citoyenne.",
        bullets: ["Formation", "Signalement", "Suivi terrain"],
        badge: "Citoyen",
      },
      {
        key: "tech",
        title: "Tech",
        desc: "Site, data, support, assistance digitale.",
        bullets: ["Support", "Données", "Sécurité / outils"],
        badge: "Digital",
      },
      {
        key: "diaspora",
        title: "Diaspora",
        desc: "Relais à l’étranger, réseaux, mobilisation internationale.",
        bullets: ["Relais local", "Événements", "Collecte / soutien"],
        badge: "Monde",
      },
    ],
    []
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.32em] font-semibold text-black/70">
          Choisir une mission
        </p>
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
          Comment souhaitez-vous aider ?
        </h2>
        <p className="mt-5 text-black/60 max-w-3xl mx-auto leading-relaxed">
          Cliquez sur une mission : le formulaire s’ouvre juste après, déjà pré-rempli.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {missions.map((m) => {
          const isOn = selected === m.key;
          return (
            <button
              key={m.key}
              type="button"
              onClick={() => onPick(m.key)}
              className={[
                "text-left rounded-3xl border overflow-hidden",
                "transition-transform duration-700 ease-out",
                "hover:scale-[1.04] hover:shadow-[0_18px_60px_rgba(0,0,0,0.10)]",
                isOn ? "border-black/20 ring-4 ring-black/5" : "border-black/10",
              ].join(" ")}
            >
              <div
                className="p-7"
                style={{
                  background: isOn ? "rgba(241,90,36,0.10)" : "rgba(0,122,61,0.06)",
                }}
              >
                <div className="flex items-center justify-between">
                  <p
                    className="text-xs uppercase tracking-[0.28em] font-extrabold"
                    style={{ color: isOn ? CI_ORANGE : CI_GREEN }}
                  >
                    {m.badge}
                  </p>

                  <span
                    className="text-xs font-extrabold uppercase tracking-widest rounded-full px-3 py-1"
                    style={{
                      background: isOn ? CI_ORANGE : CI_GREEN,
                      color: "white",
                    }}
                  >
                    {isOn ? "Sélectionné" : "Choisir"}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold">{m.title}</h3>
                <p className="mt-4 text-black/70 leading-relaxed">{m.desc}</p>

                <ul className="mt-5 space-y-2 text-sm text-black/70">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span style={{ color: CI_GREEN }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
