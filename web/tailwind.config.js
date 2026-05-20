/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kairo: {
          // Aligned with Anansi family. Kairo inherits Anansi's primary palette
          // (black + cream + red) for brand consistency. Gold is reserved for
          // one specific job: the [AI] bracket in the K[AI]RO wordmark.
          black:  "#0E0E0E",      // primary text, dark surfaces (matches anansi-black)
          cream:  "#F8F8FF",      // ghostwhite — cooler, crisper than warm cream
          red:    "#7A0F14",      // primary accent: CTAs, links, hover (matches anansi-red, oxblood)
          "red-light": "#9A1F24", // hover state for red CTAs
          gold:   "#D69B32",      // RESERVED for [AI] bracket in wordmark only
          // Subtle neutrals (kept narrow on purpose)
          muted:  "#6B6B6B",      // secondary text (matches anansi-gray)
          border: "#E2E0DB",      // dividers, input borders (matches anansi-border)
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
