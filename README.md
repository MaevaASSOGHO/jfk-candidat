This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Le [slug] te permet d’avoir des URLs comme :

/actualites/evenements/meeting-abobo

/actualites/evenements/tour-yopougon

Ton build plante à cause de useSearchParams() : en App Router, Next doit parfois suspendre la lecture des search params, et en build (prerender) ça déclenche l’erreur si ce n’est pas enveloppé correctement.

✅ Correction simple : wrapper avec <Suspense> et déplacer useSearchParams() dans un composant enfant.
Ça vient du même problème que /don/merci : dans /don, tu utilises useSearchParams() directement au top-level du composant. En build, Next essaie de prerender et ça peut planter si useSearchParams n’est pas dans un composant encapsulé par <Suspense>.

✅ Solution : on garde tout ton code, on déplace la logique useSearchParams dans un enfant et on wrap avec Suspense.