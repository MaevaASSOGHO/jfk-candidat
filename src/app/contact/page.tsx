"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import MissionCards from "@/components/contact/MissionCards";
import JoinMovementSection from "@/components/contact/JoinMovementSection";
import InviteCandidateSection from "@/components/contact/InviteCandidateSection";

export type MissionKey =
  | "terrain"
  | "communication"
  | "logistique"
  | "observateur"
  | "tech"
  | "diaspora";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

export default function ContactPage() {
  const [selectedMission, setSelectedMission] = useState<MissionKey | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const onPickMission = (m: MissionKey) => {
    setSelectedMission(m);
    // scroll vers le formulaire
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="bg-white text-black">
      <Header />
      {/* ÉCRAN 1 — HERO */}
      <section className="relative min-h-screen text-white overflow-hidden">
        <Image
          key="hero-contact"
          src="/images/contact.jpg"
          alt="Rejoindre le mouvement"
          fill
          priority
          className="object-cover hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-14 text-center">
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/85">
              Mobilisation
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Rejoindre le mouvement
            </h1>
            <p className="mt-5 text-white/85 text-base md:text-lg">
              Chaque Ivoirien peut contribuer.
            </p>

            <div className="mt-7 flex justify-center">
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

      {/* Missions (clic => ouvre formulaire pré-rempli) */}
      <MissionCards selected={selectedMission} onPick={onPickMission} />

      {/* Form + WhatsApp + Merci + Contacts */}
      <div ref={formRef} className="scroll-mt-28">
        <JoinMovementSection selectedMission={selectedMission} />
      </div>

      {/* Inviter le candidat */}
      <InviteCandidateSection />
    </main>
  );
}
