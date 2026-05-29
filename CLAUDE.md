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
npm run build  # production build (standalone output)
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

Custom Tailwind palette (defined in `tailwind.config.js`):

| Token | Hex | Use |
|---|---|---|
| `kairo-black` | `#0E0E0E` | Primary background |
| `kairo-cream` | `#F8F8FF` | Primary text on dark |
| `kairo-red` | `#7A0F14` | Accent sections, gradients |
| `kairo-gold` | `#D69B32` | **Reserved exclusively for the [AI] bracket in the K[AI]RO wordmark** |
| `kairo-muted` | `#6B6B6B` | Secondary text |
| `kairo-border` | `#E2E0DB` | Dividers |

Fonts: `font-display` = Instrument Serif, `font-sans` = DM Sans (both via Google Fonts CSS variables).

## External dependencies

- **Tally.so** — Email capture form. The embed URL and iframe-resize script are hardcoded in `EmailCapture.js`. No API key needed; Tally handles submissions.
- No other external services.
