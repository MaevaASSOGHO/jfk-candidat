import Link from "next/link";
import { EventItem } from "@/lib/content/events";

export default function RelatedLinks({
  items,
  baseHref,
}: {
  items: EventItem[];
  baseHref: "/actualites" | "/presse";
}) {
  if (!items.length) return null;

  return (
    <div className="mt-10">
      <p className="text-xs uppercase tracking-[0.22em] font-semibold text-black/60">
        Actus liées
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {items.map((e) => (
          <Link
            key={e.slug}
            href={`${baseHref}/${e.slug}`}
            className="rounded-3xl border border-black/10 bg-white overflow-hidden hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition"
          >
            <div className="relative h-[160px] bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={e.image}
                alt={e.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-5 bottom-4 text-white">
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-white/85">
                  {new Date(e.date).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h4 className="mt-1 text-lg font-extrabold">{e.title}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
