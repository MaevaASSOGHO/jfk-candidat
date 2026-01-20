"use client";

import { useEffect, useMemo, useState } from "react";
import type { MissionKey } from "@/app/contact/page";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

export default function JoinMovementSection({
  selectedMission,
}: {
  selectedMission: MissionKey | null;
}) {
  const missions = useMemo(
    () => [
      { key: "terrain", label: "Terrain" },
      { key: "communication", label: "Communication" },
      { key: "logistique", label: "Logistique" },
      { key: "observateur", label: "Observateur" },
      { key: "tech", label: "Tech" },
      { key: "diaspora", label: "Diaspora" },
    ],
    []
  );

  const WA_NUMBER = "2250700000000"; // <-- remplace
  const WA_GROUP = "https://chat.whatsapp.com/XXXXX"; // <-- remplace

  const [mission, setMission] = useState<MissionKey | "">("");
  const [submitted, setSubmitted] = useState(false);

  // ✅ quand on clique une carte, le select se remplit automatiquement
  useEffect(() => {
    if (selectedMission) setMission(selectedMission);
  }, [selectedMission]);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);

  const waText = encodeURIComponent(
    `Bonjour, je souhaite rejoindre le mouvement.\nMission: ${mission || "-"}\nNom: ${fullName}\nVille: ${city}\nTéléphone: ${phone}`
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-20">
      <div className="rounded-[36px] border border-black/10 overflow-hidden">
        <div className="h-1 w-full grid grid-cols-3">
          <div style={{ background: CI_ORANGE }} />
          <div className="bg-white" />
          <div style={{ background: CI_GREEN }} />
        </div>

        <div className="grid lg:grid-cols-[1fr_0.85fr]">
          <div className="p-8 md:p-10 bg-white">
            {!submitted ? (
              <>
                <p className="text-xs uppercase tracking-[0.32em] font-semibold text-black/70">
                  Formulaire d’engagement
                </p>
                <h3 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
                  Rejoindre le mouvement
                </h3>

                {/* ✅ petit hint si aucune mission choisie */}
                {!mission && (
                  <p className="mt-5 text-black/70 leading-relaxed">
                    Choisissez une mission au-dessus, puis complétez vos informations.
                  </p>
                )}

                <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
                  <div>
                    <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                      Mission
                    </label>
                    <select
                      value={mission}
                      onChange={(e) => setMission(e.target.value as MissionKey)}
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                      required
                    >
                      <option value="" disabled>
                        Sélectionner…
                      </option>
                      {missions.map((m) => (
                        <option key={m.key} value={m.key}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* ... reste de ton formulaire identique ... */}
                  {/* (nom, téléphone, ville, etc) */}

                  <div>
                    <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                      Nom & prénom
                    </label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                        Téléphone
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                        Ville / Commune
                      </label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                        required
                      />
                    </div>
                  </div>

                  <label className="mt-2 flex items-start gap-3 text-sm text-black/70">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-black/20"
                      required
                    />
                    <span>
                      J’accepte que mes informations soient utilisées uniquement pour être recontacté.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="mt-3 rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest text-white transition hover:scale-[1.01]"
                    style={{ background: CI_ORANGE }}
                  >
                    Envoyer
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10">
                <h3 className="text-3xl font-extrabold">Merci ✨</h3>
                <p className="mt-4 text-black/70">
                  Votre demande est enregistrée. Rejoignez le groupe WhatsApp.
                </p>
                <a
                  href={WA_GROUP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest text-white transition hover:scale-[1.01]"
                  style={{ background: CI_GREEN }}
                >
                  Rejoindre le groupe WhatsApp →
                </a>
              </div>
            )}
          </div>

          {/* Colonne WhatsApp */}
          <div className="p-8 md:p-10 bg-[#0B1F16] text-white">
            <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/75">
              WhatsApp direct
            </p>
            <h3 className="mt-4 text-2xl md:text-3xl font-extrabold">
              Besoin d’une réponse rapide ?
            </h3>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest text-white transition hover:scale-[1.02]"
              style={{ background: CI_GREEN }}
            >
              Ouvrir WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
