"use client";

import { useState } from "react";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

export default function InviteCandidateSection() {
  const [org, setOrg] = useState("");
  const [theme, setTheme] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");

  return (
    <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-24">
      <div className="relative rounded-3xl border border-black/10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/invite.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative grid lg:grid-cols-2">
          <div className="p-8 md:p-10 text-white">
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/80">
              Inviter le candidat
            </p>
            <h3 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
              Proposez une rencontre dans votre commune
            </h3>
            <p className="mt-5 text-white/85 leading-relaxed">
              Organisation, thème, ville, date proposée : nous vous recontactons pour valider la
              faisabilité et l’agenda.
            </p>

            <div className="mt-7 h-1 w-44 overflow-hidden rounded-full">
              <div className="h-full grid grid-cols-3">
                <div style={{ background: CI_ORANGE }} />
                <div className="bg-white" />
                <div style={{ background: CI_GREEN }} />
              </div>
            </div>
          </div>

          <form
            className="
              p-8 md:p-10
              text-gray-900
              bg-white/95 backdrop-blur
              border-t border-white/20
              lg:border-t-0 lg:border-l lg:border-white/20
            "
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demande envoyée (démo).");
              setOrg("");
              setTheme("");
              setCity("");
              setDate("");
              setContact("");
            }}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                  Organisation / structure
                </label>
                <input
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                  placeholder="Ex : Association de quartier"
                  required
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                  Thème / objet
                </label>
                <input
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                  placeholder="Ex : Emploi, jeunesse, sécurité…"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                    Ville / Commune
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                    placeholder="Ex : Abidjan, Cocody"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                    Date proposée
                  </label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                    placeholder="Ex : 15/02/2026"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                  Contact (nom + téléphone)
                </label>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                  placeholder="Ex : Konan A., +225 07 xx xx xx xx"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest text-white transition hover:scale-[1.01]"
                style={{ background: CI_ORANGE }}
              >
                Envoyer la demande
              </button>

              <p className="text-xs text-black/55">
                Vos informations sont utilisées uniquement pour organiser la rencontre.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
