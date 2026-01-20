"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CI_ORANGE = "#F15A24";

export default function MerciDon() {
  const sp = useSearchParams();
  const amount = sp.get("amount") || "";

  return (
    <main className="bg-white text-black">
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">Merci pour votre soutien.</h1>
        {amount && (
          <p className="mt-5 text-black/70">
            Montant : <span className="font-extrabold">{amount} FCFA</span>
          </p>
        )}

        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <Link
            href="/"
            className="rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest border border-black/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition"
          >
            Retour accueil
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl px-6 py-4 font-extrabold uppercase tracking-widest text-white transition hover:scale-[1.01]"
            style={{ background: CI_ORANGE }}
          >
            Rejoindre le mouvement
          </Link>
        </div>
      </section>
    </main>
  );
}
