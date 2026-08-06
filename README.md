# CozyPaws 🐾

Single-viewport (h-screen, no-scroll) hero section for **CozyPaws** — a pet store landing page. Built pixel-faithfully to a Figma design brief: mint palette, DM Serif Display headline with staggered word-pop entrance, floating product/video cards, a three-panel pet photo strip with social-proof overlays, and full mobile / tablet / desktop responsive layouts.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (CSS-first config, `@theme` tokens, custom keyframes)
- Lucide React icons

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
├── App.tsx               — h-screen shell: Header + Hero
├── index.css             — Tailwind v4 @theme tokens, keyframes, delay helpers
├── components/
│   ├── Header.tsx        — logo, nav, search / favorites / cart / avatar
│   └── Hero.tsx          — heading, side cards, bottom photo strip, overlays, all breakpoints
└── data/
    └── assets.ts         — external asset URLs (hot-linked, per design brief)
```

## Design notes

- Fonts: DM Serif Display (headline) + Inter (UI), loaded via Google Fonts.
- All imagery is hot-linked from the Figma site CDN (per brief — nothing downloaded).
- Motion is CSS-keyframe only: `word-pop`, `fade-up`, `slide-in-*`, `photo-reveal`, `scale-in`, with `.delay-100 … .delay-1200` helpers; respects `prefers-reduced-motion`.
- Breakpoints: mobile (<md), tablet (md–lg), desktop (lg+).
