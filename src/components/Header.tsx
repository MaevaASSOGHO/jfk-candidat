import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 text-white">
        
        {/* LOGO TEXTE ENCADRÉ */}
        <a href="/">
        <img
            src="/images/logo.png"
            alt="Votez Jean-François Kouassi"
            width={260}
            height={110}
            className="h-auto w-[220px] md:w-[260px]"
        />
        </a>

        {/* NAVIGATION */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <Link className="transition-transform duration-300 hover:scale-115" href="/">Accueil</Link>
          <Link className="transition-transform duration-300 hover:scale-115" href="/candidat">Le candidat</Link>
          <Link className="transition-transform duration-300 hover:scale-115" href="/programme">Programme</Link>
          <Link className="transition-transform duration-300 hover:scale-115" href="/actualites">Actualités</Link>
          <Link className="transition-transform duration-300 hover:scale-115" href="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="flex gap-4">
          {/* <a
            href="https://wa.me/225XXXXXXXX"
            className="border-2 border-white px-4 py-2 text-sm uppercase hover:bg-white hover:text-black transition"
          >
            Rejoindre
          </a> */}

          <Link
            href="/don"
            className="inline-flex items-center justify-center
            px-4 py-2 text-sm uppercase font-semibold
            bg-[#F15A24] text-white border-2 border-[#F15A24]
            hover:bg-[#F15A24] hover:border-[#F15A24]
            transition-transform duration-300 hover:scale-115"
          >
            Faire un don
          </Link>
        </div>
      </div>
    </header>
  );
}
