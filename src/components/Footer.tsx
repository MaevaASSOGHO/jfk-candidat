import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/10 bg-white overflow-hidden">
      {/* Watermark blason (arrière-plan) */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/blason-civ.png"
          alt=""
          aria-hidden="true"
          className="
            absolute right-6 top-1/2 -translate-y-1/2
            w-[480px] max-w-[70vw]
            opacity-[0.08]
            select-none
          "
        />
        {/* léger voile pour un rendu “papier” propre */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Fine bande Côte d'Ivoire */}
      <div className="relative z-10 h-1 w-full">
        <div className="h-full grid grid-cols-3">
          <div className="bg-[#F15A24]" />
          <div className="bg-white border-x border-black/5" />
          <div className="bg-[#007A3D]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src="/images/jfk-logo.png"
              alt="Votez Jean-François Kouassi"
              className="h-auto w-[190px]"
            />
          </div>

          <p className="mt-4 text-[#0B1F16]/80 leading-relaxed">
            Une Côte d’Ivoire juste, forte et rassemblée.
          </p>

          <div className="mt-6">
            <Link
              href="/don"
              className="
                inline-flex items-center justify-center rounded-xl px-5 py-3 font-bold uppercase
                bg-[#F15A24] text-white border-2 border-[#F15A24]
                transition-transform duration-300 hover:scale-105
              "
            >
              Faire un don
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-extrabold tracking-widest uppercase text-[#0B1F16]">
            Liens rapides
          </h4>
          <ul className="mt-4 space-y-2 text-[#0B1F16]/80">
            {[
              ["Le candidat", "/candidat"],
              ["Programme", "/programme"],
              ["Actualités", "/actualites"],
              ["Presse", "/presse"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="
                    inline-flex items-center gap-2
                    text-[#0B1F16]/80
                    transition-all duration-200
                    hover:text-[#F15A24]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#007A3D]" />
                  <span className="border-b border-transparent hover:border-[#F15A24]/50">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-extrabold tracking-widest uppercase text-[#0B1F16]">
            Réseaux
          </h4>
          <ul className="mt-4 space-y-2 text-[#0B1F16]/80">
            {[
              ["Facebook", "https://facebook.com/"],
              ["X (Twitter)", "https://x.com/"],
              ["Instagram", "https://instagram.com/"],
              ["YouTube", "https://youtube.com/"],
            ].map(([label, url]) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-[#0B1F16]/80
                    transition-all duration-200
                    hover:text-[#F15A24]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#007A3D]" />
                  <span className="border-b border-transparent hover:border-[#F15A24]/50">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs text-[#0B1F16]/70 leading-relaxed">
            Suivez les annonces, déplacements et temps forts de la campagne.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-extrabold tracking-widest uppercase text-[#0B1F16]">
            Contact QG
          </h4>

          <div className="mt-4 space-y-2 text-[#0B1F16]/80">
            <p>
              <span className="font-semibold text-[#0B1F16]">Localisation :</span>{" "}
              Abidjan – Côte d’Ivoire
            </p>
            <p>
              <span className="font-semibold text-[#0B1F16]">Email :</span>{" "}
              <a
                className="
                  underline decoration-black/20 underline-offset-4
                  hover:text-[#F15A24] hover:decoration-[#F15A24]/50 transition
                "
                href="mailto:contact@jfk-ci.ci"
              >
                contact@jfk-ci.ci
              </a>
            </p>
            <p>
              <span className="font-semibold text-[#0B1F16]">Téléphone :</span>{" "}
              <a
                className="
                  underline decoration-black/20 underline-offset-4
                  hover:text-[#F15A24] hover:decoration-[#F15A24]/50 transition
                "
                href="tel:+225000000000"
              >
                +225 00 00 00 00 00
              </a>
            </p>
          </div>

          {/* mini note */}
          <div className="mt-6 rounded-2xl border border-black/10 bg-[#007A3D]/[0.06] p-4 text-xs text-[#0B1F16]/80">
            En rejoignant la campagne, vous contribuez à une mobilisation citoyenne
            pacifique et structurée.
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#0B1F16]/70">
          <p>© {year} MEEZUS. Tous droits réservés.</p>

          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-[#F15A24] transition"
            >
              Mentions légales
            </Link>
            <span className="text-black/20">•</span>
            <Link
              href="/politique-confidentialite"
              className="hover:text-[#F15A24] transition"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
