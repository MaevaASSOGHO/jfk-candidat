export type ContentType = "communique" | "terrain" | "presse" | "video" | "evenement";

export type EventItem = {
  slug: string;
  type: ContentType;
  title: string;
  date: string;      // "2026-02-02"
  time?: string;     // "18:00"
  location?: string; // "Yopougon"
  image: string;     // "/images/..."
  excerpt: string;
  content: string;   // texte long
  relatedSlugs?: string[];
};

export const CONTENT: EventItem[] = [
  {
    slug: "meeting-yopougon-2026",
    type: "evenement",
    title: "Grand échange citoyen à Yopougon",
    date: "2026-02-02",
    time: "18:00",
    location: "Yopougon",
    image: "/images/events/yopougon.jpg",
    excerpt: "Rencontre ouverte : sécurité, jeunesse, emploi et solutions locales.",
    content:
      "Nous invitons les citoyens à un échange ouvert...\n\nAu programme : prise de parole, questions/réponses et recueil de propositions.",
    relatedSlugs: ["communique-organisation-2026"],
  },
  {
    slug: "communique-organisation-2026",
    type: "communique",
    title: "Communiqué : Organisation de la campagne",
    date: "2026-01-28",
    image: "/images/actus/communique.jpg",
    excerpt: "Une campagne de proximité, structurée, et tournée vers l’intérêt général.",
    content:
      "Notre mouvement s’organise autour de comités...\n\nObjectif : proximité, écoute, résultats.",
    relatedSlugs: ["meeting-yopougon-2026"],
  },
];
