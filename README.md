# CozyPaws 🐾

A full premium pet-store marketing site for **CozyPaws** — a multi-page React prototype with
a scroll-linked story. The hero is reproduced pixel-faithfully from the CozyPaws design
(mint palette, DM Serif Display headline with staggered word-pop, floating product/video
cards and pets standing OUTSIDE the banner frames — the pet photos' baked-in ledges were
cropped so only their paws rest on the cards). Below the hero: a **sticky scroll-pinned
showcase** (Framer-style: the next section slides up and covers the pinned panel), shop-by-
category grid, best sellers, features, testimonials, newsletter CTA, FAQ and footer.

**Prototype app** (no backend): multi-page routing with a fake local sign-up. Visitors see
an empty header (no badges, no avatar, a "Sign in" pill); cart, favorites and profile are
gated behind the prototype sign-up (localStorage only). All CTAs, nav, footer links and
product actions are wired to real pages.

## Stack

- React 19 + TypeScript + Vite 8 + Tailwind CSS v4
- React Router 7 (multi-page), Lenis smooth scroll, Lucide icons
- CSS-only entrance + scroll-reveal motion (honours `prefers-reduced-motion`)

## Pages

`/` home · `/shop` · `/shop/:category` · `/product/:id` · `/delivery` · `/brands` ·
`/blog` · `/cart` (auth) · `/favorites` (auth) · `/profile` (auth) · `/signup` (prototype) · 404

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
├── App.tsx                 — routes + layout (Header/Footer), RequireAuth gates
├── main.tsx                — BrowserRouter + StoreProvider
├── index.css               — Tailwind v4 @theme tokens, keyframes, delays, reveal system
├── context/store.tsx       — prototype auth + cart + favorites (localStorage)
├── hooks/                  — useLenis, useReveal
├── components/             — Header, Hero, StickyShowcase, Categories, BestSellers,
│                             ProductCard, Features, Testimonials, Newsletter, Faq, Footer,
│                             RequireAuth, ScrollToTop
├── pages/                  — Home, Shop, Product, Delivery, Brands, Blog, Cart,
│                             Favorites, Profile, SignUp, NotFound
└── data/                   — assets.ts (hot-linked CDN + local pet crops), products.ts
```

## Design notes

- Fonts: DM Serif Display (headline) + Inter (UI), via Google Fonts.
- Palette: mint `#EFFDF0`, mid-mint `#A7E8B0`, forest `#1a3d1a`, near-black-green
  `#003C08`, orange accent `#E86A10`.
- The hero banner cards are colored to the pets' own photo ledges so the seam disappears.

## Deploy

- GitHub: https://github.com/iiann-dev/cozypaws
- Vercel auto-deploys on push to `master`.
