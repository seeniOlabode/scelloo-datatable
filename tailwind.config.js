const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Import all the project themes and colors for tailwind
      colors: {
        "scelloo-primary": "#6D5BD0",
        "scelloo-fonts-primary": "#25213B",
        "scelloo-fonts-primary-variant": "#6E6893",
        "scelloo-backgrounds-parent": "#F2F0F9",
        "scelloo-fonts-stroke": "#C6C2DE",
        "scelloo-backgrounds-stripe": "#F4F2FF",
        "scelloo-fonts-primary-icon": "#8B83BA",
        "scelloo-fonts-positive": "#007F00",
        "scelloo-fonts-negative": "#D30000",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
