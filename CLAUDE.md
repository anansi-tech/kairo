# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Kairo is Anansi's executive AI education product — a 2-day in-person hands-on workshop for working professionals. This repo contains the pre-launch marketing site at `kairo.anansi.xyz`.

- `web/` — Next.js marketing site
- `docs/` — Positioning brief, curriculum spine, workshop materials

## Commands

All commands run from `web/`:

```bash
npm run dev    # dev server on port 3002
npm run build  # production build (standalone output locally; skipped on Vercel, where it breaks the build)
npm start      # serve production build on port 3002
```

No lint or test scripts are configured.

## Architecture

**Next.js 14 App Router**, single-page marketing site. No backend, no database, no auth.

```
web/
├── app/
│   ├── layout.js       # Root layout — loads Header, Footer, fonts
│   ├── page.js         # Entire site: Hero → Curriculum → Personas → Moats → Pricing → Instructor → CTA
│   └── globals.css     # Base styles, hero entrance animations, scroll reveal keyframes
├── components/
│   ├── Header.js       # Sticky nav with smooth-scroll links, hamburger on mobile
│   ├── Footer.js
│   ├── EmailCapture.js # Tally.so iframe embed (submissions → kairo@anansi.xyz)
│   └── ScrollReveal.js # IntersectionObserver wrapper for fade-in animations
└── public/             # Brand assets, logos, profile photo
```

The page is one long scroll with all sections in `app/page.js` — no routing.

## Design system

Custom Tailwind palette (defined in `tailwind.config.js`; `public/colors.json` is the brand source of truth). void_black / hunt_red / ash_white — one red, no gold:

| Token | Hex | Use |
|---|---|---|
| `kairo-black` | `#050505` | void_black — primary text, dark surfaces |
| `kairo-red` | `#C1121F` | hunt_red — accent: CTAs, links, wordmark AI, all sections |
| `kairo-red-deep` | `#9A0E18` | hover / pressed state for red CTAs |
| `kairo-cream` | `#F7F7F2` | ash_white — primary background (token name kept as `cream`) |
| `kairo-muted` | `#5C5C57` | Secondary text |
| `kairo-border` | `#E3E3DC` | Dividers, input borders |

Exactly three gradients exist on the page (body wash, hero, final CTA), defined as CSS custom properties in `globals.css`. Do not add more.

Fonts: `font-display` = Instrument Serif, `font-body` = DM Sans, `font-mono` = DM Mono (all via `next/font/google` CSS variables in `layout.js`).

## External dependencies

- **Tally.so** — Email capture form. The embed URL and iframe-resize script are hardcoded in `EmailCapture.js`. No API key needed; Tally handles submissions.
- No other external services.
