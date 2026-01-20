"use client";

import { SVGProps, useEffect, useState } from "react";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Le candidat", href: "/candidat" },
  { label: "Programme", href: "/programme" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

function IconMenu(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconX(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  // Empêche le scroll derrière le menu
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Fermer avec ESC
  useEffect(() => {
    const onKey = (e: { key: string; }) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 text-white">
          {/* LOGO */}
          <Link href="/" className="inline-flex items-center">
            <img
              src="/images/logo.png"
              alt="Votez Jean-François Kouassi"
              width={260}
              height={110}
              className="h-auto w-[220px] md:w-[260px]"
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-transform duration-300 hover:scale-110"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* DROITE */}
          <div className="flex items-center gap-3">
            {/* ✅ Bouton DON : DESKTOP SEULEMENT */}
            <Link
              href="/don"
              className="
                hidden md:inline-flex items-center justify-center
                px-4 py-2 text-sm uppercase font-semibold
                bg-[#F15A24] text-white border-2 border-[#F15A24]
                transition-transform duration-300 hover:scale-110
              "
            >
              Faire un don
            </Link>

            {/* ✅ Hamburger : MOBILE SEULEMENT */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="
                md:hidden inline-flex items-center justify-center
                h-11 w-11 rounded-xl border border-white/25
                bg-white/10 hover:bg-white/15 transition
              "
              aria-label="Ouvrir le menu"
              aria-expanded={open}
            >
              <IconMenu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* ✅ MENU MOBILE PLEIN ÉCRAN */}
      {open && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* backdrop cliquable */}
          <button
            className="absolute inset-0 bg-black/25"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          />

          <div className="relative h-full w-full text-white overflow-y-auto overscroll-contain"
            style={{ background: CI_GREEN }}>
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-6">
              <div className="w-11" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-11 w-11 rounded-full hover:bg-black/5 transition"
                aria-label="Fermer"
              >
                <IconX className="h-8 w-8 text-white" />
              </button>
            </div>

            {/* Logo (plus grand) */}
            <div className="flex justify-center mb-10">
              <img
                src="/images/logo.png"
                alt="Votez Jean-François Kouassi"
                className="h-auto w-[240px]"
              />
            </div>

            {/* Liens centrés */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
              <div className="space-y-10">
                {navLinks.map((l) => (
                  <Link
                    href={l.href}
                    className="
                      block text-xl font-bold uppercase tracking-wide
                      py-3
                      transition-transform duration-200
                      hover:scale-[1.02]
                    "
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA en bas */}
            <div className="px-6 pb-10 py-5">
              <Link
                href="/don"
                onClick={() => setOpen(false)}
                className="
                  w-full inline-flex items-center justify-center
                  rounded-full px-8 py-4
                  text-xl font-extrabold uppercase tracking-widest
                  text-white shadow-[0_16px_40px_rgba(0,0,0,0.10)]
                  transition hover:scale-[1.01]
                "
                style={{ background: CI_ORANGE }}
              >
                Faire un don
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
