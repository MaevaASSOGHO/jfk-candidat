"use client";

import { useMemo } from "react";

export default function ShareBar({
  title,
  path,
}: {
  title: string;
  path: string; // ex: "/actualites/slug"
}) {
  const url = useMemo(() => {
    if (typeof window === "undefined") return path;
    return window.location.origin + path;
  }, [path]);

  const wa = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Lien copié ✅");
    } catch {
      alert(url);
    }
  };

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest border border-black/10 hover:border-black/20 transition bg-white"
      >
        Partager WhatsApp
      </a>

      <a
        href={fb}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest border border-black/10 hover:border-black/20 transition bg-white"
      >
        Partager Facebook
      </a>

      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest border border-black/10 hover:border-black/20 transition bg-white"
      >
        Copier le lien
      </button>
    </div>
  );
}
