/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        anansi: {
          // Kairo register — light, professional, cream-and-bronze
          cream: "#F5EEDC",
          espresso: "#2A1A12",
          bronze: "#B87428",
          copper: "#B97339",
          gold: "#D69B32",
          black: "#050505",
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
