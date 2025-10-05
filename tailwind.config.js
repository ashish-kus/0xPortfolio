const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        sans: ["JetBrains Mono", "Courier Prime", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "Courier Prime", "monospace"],
        serif: ["Courier Prime", "serif"],
      },
      fontSize: {
        "heading-1": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.2" }],
        "heading-2": ["clamp(1.75rem, 4vw, 2.75rem)", { lineHeight: "1.3" }],
        "heading-3": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.35" }],
        "heading-4": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.4" }],
      },
      colors: {
        primary: "#1d1e20", // true black
        secondary: "#F8F9FA", // soft white / off-white
        accent: "#FF5722", // bright orange/red to mark links and CTAs
      },
    },
  },
  plugins: [heroui()],
};
