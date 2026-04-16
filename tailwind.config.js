/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff2d2d",
          50: "#fff1f1",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff6b6b",
          500: "#ff2d2d",
          600: "#ed1515",
          700: "#c80d0d",
          800: "#a50f0f",
          900: "#881414",
        },
        accent: {
          DEFAULT: "#ff2d2d",
          light: "#ff6b6b",
          dark: "#ed1515",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          50: "#f5f5f5",
          100: "#1a1a1a",
          200: "#2a2a2a",
          300: "#3a3a3a",
          400: "#4a4a4a",
        },
        light: "#ffffff",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
