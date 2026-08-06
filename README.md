# CozyPaws 🐾

A full premium pet-store marketing site for **CozyPaws** — single-page marketing build with
a scroll-linked story. The hero is reproduced pixel-faithfully from the CozyPaws design
(mint palette, DM Serif Display headline with staggered word-pop, floating product/video
cards and a pets-peeking-over-banner strip built by color-matching the composite photos'
own ledges). Below the hero: marquee, shop-by-category grid, best sellers, "why us"
features, testimonials, newsletter CTA, FAQ and footer — all Framer-grade with Lenis smooth
scroll and scroll-reveal animations.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (CSS-first config, `@theme` tokens, custom keyframes)
- Lenis (smooth scroll) + Lucide React icons
- CSS-only entrance + scroll-reveal motion (honours `prefers-reduced-motion`)

## Quick start

```bash
npm install
npm run dev      # local dev server (localhost only)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├── App.tsx                 — page shell: fixed Header + main sections + Footer, useLenis
├── index.css               — Tailwind v4 @theme tokens, keyframes, delays, reveal system
├── hooks/
│   ├── useLenis.ts         — smooth-scroll
│   └── useReveal.ts        — IntersectionObserver scroll-reveal
├── components/
│   ├── Header.tsx          — fixed logo / nav / actions (scroll-aware backdrop)
│   ├── Hero.tsx            — headline, side cards, pets-peek banner strip, all breakpoints
│   ├── Marquee.tsx         — scrolling brand-values band
│   ├── Categories.tsx      — shop-by-category grid
│   ├── BestSellers.tsx     — featured product grid
│   ├── Features.tsx        — why-CozyPaws split
│   ├── Testimonials.tsx    — reviews
│   ├── Newsletter.tsx      — email capture
│   ├── Faq.tsx             — accordion
│   └── Footer.tsx
└── data/
    └── assets.ts           — external asset URLs (hot-linked, per design brief)
```

## Design notes

- Fonts: DM Serif Display (headline) + Inter (UI), via Google Fonts.
- Palette: mint `#EFFDF0`, mid-mint `#A7E8B0`, forest `#1a3d1a` / near-black-green
  `#003C08`, orange accent `#E86A10`.
- All imagery is hot-linked from the design CDN (nothing downloaded) — the hero banner
  cards are colored to the pets' own photo ledges so they merge seamlessly.
- Motion: Lenis smooth scroll + IntersectionObserver reveals + CSS keyframes.

## Deploy

- GitHub: https://github.com/iiann-dev/cozypaws
- Vercel auto-deploys on push to `master`.
