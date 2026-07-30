# Meenakshi Pharma — Redesigned Website

A complete React (Vite) rebuild of the Meenakshi Pharma site, styled after the
premium reference design you provided (split hero, blush/cream palette, rounded
cards, soft shadows, Playfair Display + Inter type, Framer Motion animations).

## Getting started

```bash
npm install
netlify dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## ⚠️ Important — content is placeholder

`meenakshi-pharma.vercel.app` renders its content client-side, so it could not
be scraped automatically. **Every piece of text and every image in this
project is a placeholder** written in a realistic pharma-company voice so you
can review the layout immediately.

To finish the site:

1. Open `src/data/content.js` — this is the **single file** that holds all
   copy for every section (hero, about, why-choose-us, products, services,
   certifications, manufacturing, quality assurance, contact, footer). Replace
   each string with the real text from your current site. Every field that
   still needs real content is marked with a `// TODO` comment.
2. Replace the placeholder images in `public/` (currently simple labeled SVGs)
   with your real photos/logo. Keep the same filenames or update the paths in
   `content.js` to match your new files.
3. Update the Google Maps embed URL in `contact.mapEmbedUrl` with your real
   business location.

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, Button, ProductCard, BadgeCard,
                 SectionHeading, Reveal (scroll animation wrapper)
  sections/      One file per homepage section (Hero, About, WhyChooseUs,
                 Products, Services, Certifications, Manufacturing,
                 QualityAssurance, Contact)
  pages/         Home.jsx assembles all sections in order
  data/          content.js — all site copy in one place
  styles/        index.css — Tailwind entry + global styles
public/           Favicon + placeholder images
```

## Tech stack

- React 18 + Vite
- React Router (single page for now; ready for more routes)
- Tailwind CSS
- Framer Motion (fade up/left/right, scale, stagger, hover, ripple buttons)
- React Icons

## Notes

- The products section includes a working search + category filter.
- All animations respect `prefers-reduced-motion`.
- Keyboard focus states are visible on all interactive elements.
- The site is responsive from mobile through large desktop.
