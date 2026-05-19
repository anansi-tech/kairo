/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kairo: {
          // Primary anchors — Kairo's distinctive palette
          navy: "#0F2742",         // primary text + dark surfaces; reads decisive, professional
          "navy-soft": "#1A3A5C",  // hover states, secondary dark surfaces
          bronze: "#B87428",       // primary accent — connective thread back to Anansi family
          copper: "#C68842",       // hover/lighter bronze for accents
          gold: "#D69B32",         // brightest accent — sparingly, for K[AI]RO bracket emphasis
          // Surfaces
          paper: "#F7F4EE",        // primary background — slightly warmer than pure white, less yellow than Spice cream
          mist:  "#E8EBF0",        // section variation — cool light blue-gray, hints at navy
          ink:   "#0F2742",        // body text alias (same as navy)
          muted: "#5C6B7E",        // secondary text — cool gray with navy undertone
          border: "#D4D9E1",       // dividers, borders
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
