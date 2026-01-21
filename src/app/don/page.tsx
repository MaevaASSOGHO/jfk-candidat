"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

const formatXOF = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n) + " FCFA";

function DonContent() {
  const sp = useSearchParams();
  const router = useRouter();

  const initial = useMemo(() => {
    const a = sp.get("amount") || "";
    const clean = a.replace(/[^\d]/g, "");
    return clean ? Number(clean) : 0;
  }, [sp]);

  const [amount, setAmount] = useState<string>(initial ? String(initial) : "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (initial && !amount) setAmount(String(initial));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const clean = amount.replace(/[^\d]/g, "");
    if (!clean || Number(clean) <= 0) return alert("Veuillez entrer un montant valide.");
    if (!consent) return alert("Veuillez accepter la confidentialité.");

    alert(`Don (démo) : ${formatXOF(Number(clean))}\n${name} • ${phone} • ${city}`);

    router.push(`/don/merci?amount=${encodeURIComponent(clean)}`);
  };

  return (
    <main className="bg-white text-black">
      <Header />

      {/* ÉCRAN 1 — HERO */}
      <section className="relative min-h-screen text-white overflow-hidden">
        <Image
          key="hero-contact"
          src="/images/don.jpg"
          alt="Rejoindre le mouvement"
          fill
          priority
          className="object-cover hero-zoom object-top md:object-[10%_10%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-7xl mx-auto px-6 pb-10 md:pb-14 text-center">
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              On compte sur vous.
            </h1>

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

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] font-semibold text-black/70">
            Soutien citoyen
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Faire un don
          </h1>

          <div className="mt-6 flex justify-center">
            <div className="h-1 w-44 overflow-hidden rounded-full">
              <div className="h-full grid grid-cols-3">
                <div style={{ background: CI_ORANGE }} />
                <div className="bg-white border-x border-black/10" />
                <div style={{ background: CI_GREEN }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          {/* Bloc montant */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Montant de votre contribution
            </h2>
            <p className="mt-4 text-black/70 leading-relaxed">
              Chaque contribution aide à financer l’organisation, les déplacements et la communication.
            </p>

            <form className="mt-8" onSubmit={submit}>
              <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                Montant (FCFA)
              </label>

              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, ""))}
                inputMode="numeric"
                className="mt-2 w-full rounded-2xl border border-black/10 px-5 py-4 text-2xl font-extrabold outline-none focus:ring-4 focus:ring-black/10"
                placeholder="Ex: 10000"
                autoFocus
              />

              {!!amount && (
                <p className="mt-3 text-black/60">
                  Soit : <span className="font-extrabold">{formatXOF(Number(amount))}</span>
                </p>
              )}

              <div className="mt-8 grid gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                    Nom & prénom
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    J’accepte que mes informations soient utilisées uniquement pour gérer ce don.
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-2 rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest text-white transition hover:scale-[1.01]"
                  style={{ background: CI_ORANGE }}
                >
                  Valider & payer →
                </button>

                <p className="text-xs text-black/55">
                  Astuce : appuyez sur <span className="font-semibold">Entrée</span> pour continuer.
                </p>
              </div>
            </form>
          </div>

          {/* Bloc info / confiance */}
          <aside className="rounded-3xl border border-black/10 overflow-hidden">
            <div className="p-8 md:p-10 text-white" style={{ background: CI_GREEN }}>
              <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/80">
                Transparence
              </p>
              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold">
                Un soutien utile, concret
              </h3>
              <p className="mt-5 text-white/85 leading-relaxed">
                Votre contribution finance des actions de terrain, l’organisation et la mobilisation.
              </p>
            </div>

            <div className="p-8 md:p-10 bg-white">
              <h4 className="text-lg font-extrabold">Ce que finance un don</h4>
              <ul className="mt-4 space-y-3 text-black/70">
                <li>• Déplacements et réunions citoyennes</li>
                <li>• Impression et matériel de campagne</li>
                <li>• Communication et mobilisation</li>
                <li>• Logistique jour de vote</li>
              </ul>

              <div className="mt-8 rounded-3xl border border-black/10 p-6">
                <p className="text-sm text-black/70 leading-relaxed">
                  Vous préférez WhatsApp ? Écrivez-nous et nous vous orientons.
                </p>
                <a
                  className="mt-4 inline-flex rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest text-white transition hover:scale-[1.01]"
                  style={{ background: CI_ORANGE }}
                  href="https://wa.me/2250700000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default function DonPage() {
  return (
    <Suspense fallback={<main className="bg-white text-black" />}>
      <DonContent />
    </Suspense>
  );
}
