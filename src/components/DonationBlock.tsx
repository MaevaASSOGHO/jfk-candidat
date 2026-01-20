"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Amount = { label: string; value?: number };

const formatXOF = (n: number) =>
  new Intl.NumberFormat("fr-FR").format(n) + " FCFA";

export default function DonationBlock() {
  const router = useRouter();

  // Palette Côte d'Ivoire
  const CI_ORANGE = "#F15A24";
  const CI_GREEN = "#007A3D";

  const amounts = useMemo<Amount[]>(
    () => [
      { label: "1 000", value: 1000 },
      { label: "2 500", value: 2500 },
      { label: "5 000", value: 5000 },
      { label: "10 000", value: 10000 },
      { label: "100 000", value: 100000 },
      { label: "Autre" },
    ],
    []
  );

  const [selected, setSelected] = useState<number | "other" | null>(null);
  const [other, setOther] = useState("");

  const goToDonate = (amount: number | string) => {
    const clean =
      typeof amount === "number"
        ? String(amount)
        : String(amount).replace(/[^\d]/g, "");

    if (!clean || Number(clean) <= 0) return;

    router.push(`/don?amount=${encodeURIComponent(clean)}`);
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        {/* Title Côte d'Ivoire vibe */}
        <p
          className="text-xs uppercase tracking-[0.28em] font-semibold text-black"
        >
          Soutien citoyen
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight"
        style={{ color: CI_ORANGE }}>
          Contribuez à la campagne pour
          <br className="hidden md:block" />
          une Côte d’Ivoire juste, forte et rassemblée
        </h2>

        {/* Amount buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {amounts.map((a) => {
            const isOther = !a.value;
            const isActive =
              (isOther && selected === "other") ||
              (!isOther && selected === a.value);

            return (
              <button
                key={a.label}
                type="button"
                onClick={() => {
                  if (isOther) {
                    setSelected("other");
                    return;
                  }
                  setSelected(a.value!);
                  // ✅ Redirection immédiate
                  goToDonate(a.value!);
                }}
                className={[
                  "min-w-[150px] md:min-w-[180px]",
                  "h-14 md:h-16 px-6",
                  "rounded-xl font-extrabold uppercase",
                  "text-white",
                  "shadow-[0_10px_25px_rgba(0,0,0,0.12)]",
                  "transition-transform duration-300 ease-out",
                  "hover:scale-105 active:scale-[0.98]",
                  isActive ? "ring-4 ring-black/10" : "ring-0",
                ].join(" ")}
                style={{
                  background: CI_GREEN,
                  border: `2px solid ${CI_GREEN}`,
                }}
              >
                {isOther ? "Autre" : `${a.label} FCFA`}
              </button>
            );
          })}
        </div>

        {/* Other amount */}
        {selected === "other" && (
          <form
            className="mt-8 flex justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              // ✅ Entrée => redirection
              goToDonate(other);
            }}
          >
            <div className="w-full max-w-md">
              <label className="block text-left text-sm font-semibold text-black/70 mb-2">
                Montant libre (FCFA)
              </label>

              <div className="flex gap-3">
                <input
                  value={other}
                  onChange={(e) =>
                    setOther(e.target.value.replace(/[^\d]/g, ""))
                  }
                  placeholder="Ex: 15000"
                  className="flex-1 rounded-xl border border-black/10 px-4 py-3 text-lg outline-none focus:ring-4 focus:ring-black/10"
                  inputMode="numeric"
                  autoFocus
                />

                {/* Mini bouton discret (optionnel) — utile sur mobile */}
                <button
                  type="submit"
                  className="rounded-xl px-5 font-bold uppercase text-white transition-transform hover:scale-105 active:scale-[0.98]"
                  style={{ background: CI_GREEN }}
                >
                  OK
                </button>
              </div>

              {other && (
                <p className="mt-2 text-sm text-black/60 text-left">
                  Soit :{" "}
                  <span className="font-semibold">{formatXOF(Number(other))}</span>
                </p>
              )}

              <p className="mt-4 text-xs text-black/55 text-left">
                Astuce : appuyez sur <span className="font-semibold">Entrée</span>{" "}
                pour continuer.
              </p>
            </div>
          </form>
        )}

        <p className="mt-10 text-sm md:text-base text-black/60">
          Votre contribution aide à financer les déplacements, l’organisation et la communication de la campagne.
        </p>
      </div>
    </section>
  );
}
