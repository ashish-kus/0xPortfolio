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
      colors: {
        primary: "#000000", // true black
        secondary: "#F8F9FA", // soft white / off-white
        accent: "#FF5722", // bright orange/red to mark links and CTAs
      },
    },
  },
  plugins: [heroui()],
};
