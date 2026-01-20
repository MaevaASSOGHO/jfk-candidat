"use client";

import { useState } from "react";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

export default function InviteBlock() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // plus tard : POST vers API
    alert("Merci ! Votre invitation a été envoyée.");
    setName("");
    setCity("");
    setPhone("");
  };

  return (
    <section className="relative overflow-hidden">
      {/* Image derrière */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/invite-bg.jpg')" }} // <-- mets ton image
      />

      {/* Overlay (lisibilité) */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/80">
            Organisation
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
            Nous inviter
          </h2>
          <p className="mt-6 text-white/85 text-base md:text-lg">
            Invitez l’équipe à votre quartier, votre association, votre événement.
          </p>

          {/* Barre drapeau */}
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

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          className="mt-12 max-w-2xl mx-auto rounded-[32px] bg-white/95 backdrop-blur
          border border-white/20 p-8 md:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
              required
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Téléphone"
              className="rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
              required
            />

            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ville / Commune"
              className="md:col-span-2 rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl px-7 py-4 font-bold uppercase text-white
            transition-transform hover:scale-[1.02] active:scale-[0.99]"
            style={{ background: CI_ORANGE }}
          >
            Envoyer l’invitation
          </button>

          <p className="mt-4 text-xs text-black/60 text-center">
            En envoyant ce formulaire, vous acceptez d’être recontacté par l’équipe.
          </p>
        </form>
      </div>
    </section>
  );
}
