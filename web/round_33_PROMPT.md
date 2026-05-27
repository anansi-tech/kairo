# Round 33 — Wire real Kairo brand assets

The Kairo brand pack is committed (`products/kairo/web/public/brand/` + `favicon/` + `social/`). The site still uses the placeholder text wordmark (`K[AI]RO` in HTML) and the default Next.js favicon. This round wires the real assets: navbar wordmark, favicon set, social/OG meta tags, and the correct logo variant per background.

CLAUDE.md applies: simplest thing that works, surgical changes, no scope creep.

---

## Read this first — the asset variant rule

The brand pack has light-bg and dark-bg variants. Using the wrong one makes the logo invisible. The rule:

| Surface | Background | Use this variant |
|---|---|---|
| Navbar | light (ghostwhite) | `wordmark-full-color-light.png` (black K-R-O + gold A-I) |
| Dark sections (Format & Pricing) | near-black | `wordmark-full-color.png` (white K-R-O + gold A-I) |
| Favicon / app icon | gold square | `favicon/*` (the gold ΛI mark) |
| Social cards | varies | `social/social-card-*.png` |

**Critical:** `wordmark-full-color.png` (no `-light` suffix) is the WHITE version for dark backgrounds. `wordmark-full-color-light.png` is the BLACK version for light backgrounds. The naming is counterintuitive — double check which one you're referencing in each spot. On the light navbar, using `wordmark-full-color.png` would render near-invisible white letters. Always `-light` on light surfaces.

Use PNGs, not SVGs. The SVGs in this pack are base64-PNG wrappers (no vector benefit, larger files). PNGs are smaller and render identically.

---

## Task 1: Navbar wordmark

`components/Header.js`, lines 29-31 currently render the placeholder text wordmark:

```jsx
<a href="#top" className="kairo-wordmark font-display text-[22px] md:text-[24px] text-kairo-black">
  K<span className="kairo-ai text-kairo-gold">[AI]</span>RO
</a>
```

Replace with the real wordmark image:

```jsx
<a href="#top" className="flex items-center" aria-label="Kairo — home">
  <Image
    src="/brand/wordmark/wordmark-full-color-light.png"
    alt="Kairo"
    width={132}
    height={36}
    priority
    className="h-[26px] md:h-[30px] w-auto"
  />
</a>
```

- Use `next/image` (`import Image from "next/image"` at top of Header.js if not present)
- `h-[26px] md:h-[30px] w-auto` keeps it sized to the navbar height; adjust width prop to match the asset's actual aspect ratio (the wordmark is roughly 7:1, so at 30px tall it's ~210px wide — set `width={210} height={30}` and let the className constrain display size)
- `priority` because it's above the fold
- Remove the now-unused `.kairo-wordmark` and `.kairo-ai` CSS rules from `globals.css` if they exist and aren't used elsewhere

Verify the gold A-I is visible and the black K-R-O reads cleanly on the ghostwhite navbar.

---

## Task 2: Favicon set

`app/layout.js` currently has no icon configuration (browser shows Next.js default). Add the full favicon set via Next.js metadata.

In the `metadata` export, add an `icons` block:

```js
export const metadata = {
  // ...existing title, description, etc.
  icons: {
    icon: [
      { url: "/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/favicon-180.png",
  },
};
```

Verify after deploy: browser tab shows the gold ΛI mark, not the Next.js default. Hard-refresh (Cmd+Shift+R) to bust the favicon cache — browsers cache favicons aggressively.

---

## Task 3: Social / Open Graph meta tags

Currently no OG tags, so sharing the Kairo link on LinkedIn/Twitter/Slack shows a blank or auto-scraped preview. Wire the social cards.

In `app/layout.js` metadata, add `openGraph` and `twitter` blocks:

```js
export const metadata = {
  title: "Kairo — Hands-on AI workshops for working professionals",
  description:
    "A 2-day hands-on AI workshop taught by Dr. David Noel (Anansi founder, Senior Cybersecurity Engineer at American Express, CS adjunct at Nova Southeastern). Open your laptop, learn from a builder, leave with working tools in your real job.",
  metadataBase: new URL("https://kairo.anansi.xyz"),
  icons: { /* from Task 2 */ },
  openGraph: {
    title: "Kairo — Hands-on AI workshops for working professionals",
    description:
      "2 days. 15 seats. Real AI tools working in your real job by Monday. Taught by Dr. David Noel.",
    url: "https://kairo.anansi.xyz",
    siteName: "Kairo by Anansi",
    images: [
      {
        url: "/social/social-card-light.png",
        width: 1200,
        height: 630,
        alt: "Kairo by Anansi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairo — Hands-on AI workshops for working professionals",
    description:
      "2 days. 15 seats. Real AI tools working in your real job by Monday.",
    images: ["/social/social-card-light.png"],
  },
};
```

Pick `social-card-light.png` or `social-card-dark.png` as the default — whichever reads better as a link preview. Dark cards usually pop more in social feeds (most feeds are light, so a dark card stands out). **Recommendation: use `social-card-dark.png`** for the OG image since it'll contrast against LinkedIn/Slack's light UI. Verify by checking the card looks right (view the file first).

Verify after deploy with a tool like opengraph.xyz or by pasting the link into a Slack/LinkedIn draft.

---

## Task 4: Dark-section logo (optional polish)

The Format & Pricing section has a near-black background. If you want to reinforce the brand there, you *could* drop a small white-version wordmark or the gold icon. But this is optional — don't force a logo where it isn't needed.

**Recommendation: skip unless there's a natural spot.** The section already works. Adding a logo just to use the asset is decoration. Only add if there's a genuine design reason (e.g., a section header that wants the mark). If you do add one, use `wordmark-full-color.png` (the white+gold version) or `icon-full-color.png` (gold square) — both read correctly on dark.

If unsure, skip this task entirely.

---

## Task 5: Clean up unused brand assets (optional)

The brand pack is comprehensive — more variants than the site uses. This is fine (good to have the full set in the repo for future use: business cards, slides, partner kits). **Don't delete brand assets** — they're intentional brand infrastructure, not bloat.

But two specific cleanups if they exist:
- Confirm `profilepic.jpg` is the only profile pic (the earlier `profilepic1-8.jpg` should already be cleaned up — verify with `ls public/*.jpg`)
- The placeholder `.kairo-wordmark` / `.kairo-ai` CSS classes in `globals.css`, now unused after Task 1, can be removed

---

## Out of scope (do NOT bundle)

- Vectorizing the SVGs into true vector paths (separate future task; PNGs are fine for web)
- Redesigning any logo
- Changing the brand palette
- New social card designs
- Animating the logo
- Header layout changes beyond the wordmark swap
- Footer changes
- Any page content changes
- Anansi homepage / Spice / other product changes
- A manifest.json / PWA setup (favicon-512 is there for it, but PWA is a separate decision)

---

## Verify

1. `npm run dev` — navbar shows the real KAIRO wordmark (black K-R-O, gold Λ-I) on ghostwhite, legible and crisp
2. Wordmark links back to top of page
3. Browser tab shows the gold ΛI favicon (hard-refresh to bust cache)
4. `npm run build` succeeds
5. View page source / inspect `<head>` — favicon links and OG meta tags present
6. Paste `https://kairo.anansi.xyz` into a Slack or LinkedIn compose box (after deploy) — shows the social card, title, description
7. Mobile: wordmark scales correctly in the navbar, doesn't crowd the nav links
8. No unused `.kairo-wordmark` / `.kairo-ai` CSS left behind
9. `ls products/kairo/web/public/*.jpg` shows only `profilepic.jpg`
10. Lighthouse: no new accessibility errors (wordmark has alt text, favicon configured)

---

## Order of execution

1. Task 1 — navbar wordmark. Single commit.
2. Task 2 — favicon set. Single commit.
3. Task 3 — social / OG meta. Single commit.
4. Task 4 — dark-section logo (skip if no natural spot). No commit if skipped.
5. Task 5 — cleanup unused CSS. Single commit (or fold into Task 1).

Push after each. Then redeploy on Vercel and verify favicon + social card in production (both are cached/scraped externally, so they need the live URL to fully verify).
