/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",

        primary: "#8b5cf6",

        secondary: "#3b82f6"
      },

      fontFamily: {
        sans: [
          "Inter",
          "sans-serif"
        ]
      },

      boxShadow: {
        glow: "0 0 30px rgba(139,92,246,0.25)"
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },

      backdropBlur: {
        xs: "2px"
      }
    }
  },

  plugins: []
};