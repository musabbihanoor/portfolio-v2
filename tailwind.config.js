/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_light: "#FFFFFF",
        bg_dark: "#0F0F0F",
        text_light: "#FFFFFF",
        text_dark: "#0F0F0F",
        light_purple: "#DFD4F7",
        purple: "#675DD8",
        pink: "#EC1686",
      },
      screens: {
        sm: "640px",
        md: "1024px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};
