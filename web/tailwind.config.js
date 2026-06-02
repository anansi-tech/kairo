/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        kairo: {
          // Final palette: void_black / hunt_red / ash_white. One red, used on all surfaces.
          // hunt_red clears AA on both light and dark backgrounds — no gold contrast-patch needed.
          black: "#050505",        // void_black — primary text, dark surfaces
          red:   "#C1121F",        // hunt_red — accent: CTAs, links, wordmark AI, all sections
          "red-deep": "#9A0E18",   // hover / pressed state for red CTAs
          cream: "#F7F7F2",        // ash_white — primary background (token name kept as `cream` to avoid a rename sweep)
          muted: "#5C5C57",        // secondary text — warm gray tuned to ash_white
          border: "#E3E3DC",       // dividers, input borders — tuned to ash_white
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
