"use client";

import { SVGProps, useEffect, useState } from "react";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";

const CI_ORANGE = "#F15A24";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Le candidat", href: "/candidat" },
  { label: "Programme", href: "/programme" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

// Icônes simples (pas besoin de librairie)
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

function SocialRow() {
  // Mets tes vrais liens
  const socials = [
    { label: "Facebook", href: "https://facebook.com", icon: "f" },
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "Instagram", href: "https://instagram.com", icon: "ig" },
    { label: "YouTube", href: "https://youtube.com", icon: "yt" },
    { label: "TikTok", href: "https://tiktok.com", icon: "tt" },
  ];

  const Icon = ({ t }) => (
    <span className="grid place-items-center h-11 w-11 rounded-full border border-white/25 text-white/90 hover:bg-white/10 transition">
      <span className="text-xs font-extrabold uppercase">{t}</span>
    </span>
  );

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
        >
          <Icon t={s.icon} />
        </a>
      ))}
    </div>
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

  // Fermer au clavier (ESC)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 text-white">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center">
            <img
              src="/images/logo.png"
              alt="Votez Jean-François Kouassi"
              width={260}
              height={110}
              className="h-auto w-[200px] md:w-[260px]"
            />
          </Link>

          {/* Navigation desktop */}
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

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/don"
              className="
                inline-flex items-center justify-center
                px-4 py-2 text-sm uppercase font-semibold
                bg-[#F15A24] text-white border-2 border-[#F15A24]
                transition-transform duration-300 hover:scale-110
              "
            >
              Faire un don
            </Link>

            {/* Bouton hamburger (mobile only) */}
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

      {/* Overlay menu mobile */}
      {open && (
        <div className="fixed inset-0 z-[999] md:hidden">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/25"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          />

          {/* Panneau */}
          <div
            className="
              relative h-full w-full
              bg-[#74A9C8] text-white
              flex flex-col
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(116,169,200,1) 0%, rgba(93,152,189,1) 100%)",
            }}
          >
            {/* Top row: X */}
            <div className="flex items-center justify-between px-6 py-6">
              <div className="w-11" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center h-11 w-11 rounded-full hover:bg-white/10 transition"
                aria-label="Fermer"
              >
                <IconX className="h-8 w-8 text-white" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex justify-center mt-2">
              <img
                src="/images/logo.png"
                alt="Votez Jean-François Kouassi"
                className="h-auto w-[78px]"
              />
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
              <div className="space-y-5">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-4xl font-extrabold tracking-wide uppercase"
                  >
                    {l.label}
                  </Link>
                ))}

                {/* Option volontaire / bénévolat */}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block text-4xl font-extrabold tracking-wide uppercase text-[#0B1F16]"
                >
                  Bénévolat
                </Link>

                <div className="pt-6">
                  <Link
                    href="/don"
                    onClick={() => setOpen(false)}
                    className="
                      inline-flex items-center justify-center
                      rounded-full px-10 py-4
                      text-2xl font-extrabold
                      shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                      transition hover:scale-[1.02]
                    "
                    style={{ background: CI_ORANGE }}
                  >
                    Faire un don
                  </Link>
                </div>
              </div>

              {/* Social */}
              <SocialRow />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
