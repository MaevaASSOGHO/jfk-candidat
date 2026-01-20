import Link from "next/link";

type EventItem = {
  slug: string;
  title: string;
  date: string; // "2026-02-02"
  time?: string; // "18:00"
  location?: string; // "Yopougon"
  image: string;
  content: string;
  relatedSlugs?: string[];
};

const CI_ORANGE = "#F15A24";
const CI_GREEN = "#007A3D";

function shareWhatsApp(text: string, url: string) {
  return `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`;
}

function shareFacebook(url: string) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

export default function UpcomingEvents({
  events,
  baseHref = "/actualites",
}: {
  events: EventItem[];
  baseHref?: "/actualites" | "/presse";
}) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] font-semibold text-black/70">
            Agenda
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight"
              style={{ color: CI_GREEN }}>
            Événements à venir
          </h2>

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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {events.map((e) => {
            const href = `${baseHref}/${e.slug}`;
            // en prod tu peux remplacer par ton domaine, ici on met une URL relative
            const shareUrl = href;

            return (
              <article
                key={e.slug}
                className="rounded-3xl border border-black/10 bg-white overflow-hidden shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-[220px] md:h-[260px] bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.image}
                    alt={e.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute left-6 bottom-5 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] font-semibold text-white/85">
                      {new Date(e.date).toLocaleDateString("fr-FR", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                      {e.time ? ` • ${e.time}` : ""}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold">{e.title}</h3>
                    {e.location && (
                      <p className="mt-2 text-white/85 text-sm font-semibold">
                        📍 {e.location}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-7 md:p-8 text-black">
                  <p className="text-black/70 leading-relaxed">{e.content}</p>

                  {/* Share */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={shareWhatsApp(e.title, shareUrl)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest border border-black/10 hover:border-black/20 transition"
                      style={{ background: "#fff" }}
                    >
                      Partager WhatsApp
                    </a>

                    <a
                      href={shareFacebook(shareUrl)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest border border-black/10 hover:border-black/20 transition"
                      style={{ background: "#fff" }}
                    >
                      Partager Facebook
                    </a>

                    <Link
                      href={href}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-[1.02]"
                      style={{ background: CI_GREEN }}
                    >
                      Voir détail →
                    </Link>
                  </div>

                  {/* Related */}
                  {e.relatedSlugs?.length ? (
                    <div className="mt-7">
                      <p className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                        Actus liées
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {e.relatedSlugs.map((s) => (
                          <Link
                            key={s}
                            href={`${baseHref}/${s}`}
                            className="text-sm font-semibold underline text-black/70 hover:text-black"
                          >
                            {s}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {/* Nous inviter (style formulaire simple) */}
        <div className="mt-16 md:mt-20 relative rounded-3xl border border-black/10 overflow-hidden">
            {/* IMAGE DERRIERE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/5.jpg')" }} // <-- mets ton image
            />

            {/* OVERLAY pour lisibilité */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative grid lg:grid-cols-2">
                {/* COLONNE GAUCHE */}
                <div className="p-8 md:p-10 text-white">
                <p className="text-xs uppercase tracking-[0.32em] font-semibold text-white/80">
                    Nous inviter
                </p>

                <h3
                    className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight"
                    style={{ color: "#ffffff" }}
                >
                    Invitez l’équipe de campagne dans votre commune
                </h3>

                <p className="mt-5 text-white/85 leading-relaxed">
                    Remplissez ce formulaire : nous vous recontactons rapidement pour confirmer la
                    disponibilité, le format de l’échange et l’organisation.
                </p>

                {/* Barre drapeau */}
                <div className="mt-7 h-1 w-44 overflow-hidden rounded-full">
                    <div className="h-full grid grid-cols-3">
                    <div style={{ background: CI_ORANGE }} />
                    <div className="bg-white" />
                    <div style={{ background: CI_GREEN }} />
                    </div>
                </div>
                </div>

                {/* FORMULAIRE */}
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
                    alert("Formulaire envoyé (démo).");
                }}
                >
                <div className="grid gap-4">
                    <div>
                    <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                        Nom & prénom
                    </label>
                    <input
                        className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                        placeholder="Ex : Aïcha Konan"
                        required
                    />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                        Téléphone
                        </label>
                        <input
                        className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                        placeholder="Ex : +225 07 xx xx xx xx"
                        required
                        />
                    </div>

                    <div>
                        <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                        Ville / Commune
                        </label>
                        <input
                        className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10"
                        placeholder="Ex : Abidjan, Yopougon"
                        required
                        />
                    </div>
                    </div>

                    <div>
                    <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                        Type d’événement
                    </label>
                    <select className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:ring-4 focus:ring-black/10">
                        <option>Réunion citoyenne</option>
                        <option>Rencontre jeunesse</option>
                        <option>Échange avec associations</option>
                        <option>Conférence / Presse</option>
                        <option>Autre</option>
                    </select>
                    </div>

                    <div>
                    <label className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
                        Détails (date souhaitée, public, lieu…)
                    </label>
                    <textarea
                        className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 min-h-[120px] outline-none focus:ring-4 focus:ring-black/10"
                        placeholder="Décrivez votre demande…"
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
                    Vos informations sont utilisées uniquement pour organiser l’événement.
                    </p>
                </div>
                </form>
            </div>
        </div>

      </div>
    </section>
  );
}
