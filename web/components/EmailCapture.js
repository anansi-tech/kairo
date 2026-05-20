"use client";

import { useEffect } from "react";

// Email capture for the Kairo cohort interest list.
//
// v2: embeds the Tally form for "Kairo Cohort Interest" with dynamic height.
// Submissions notify kairo@anansi.xyz.
//
// Tally's resize script (script.js below) is required for dynamicHeight=1 to work —
// without it, the iframe renders at a fixed default height and either clips or
// leaves whitespace.

const TALLY_EMBED_URL =
  "https://tally.so/embed/ob58Jb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function EmailCapture() {
  useEffect(() => {
    // Load Tally's iframe-resize script once. If it's already loaded
    // (e.g., on a soft route change), Tally.loadEmbeds() reapplies it.
    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (existing) {
      if (window.Tally?.loadEmbeds) window.Tally.loadEmbeds();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => window.Tally?.loadEmbeds?.();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mt-10 max-w-[640px] mx-auto">
      <iframe
        data-tally-src={TALLY_EMBED_URL}
        loading="lazy"
        width="100%"
        height="280"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Kairo Cohort Interest"
        className="w-full"
      />
    </div>
  );
}
