/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "main-dark": "#16181C",
        "main-orange": "#FF906F"
      },
      transitionProperty:{
        width: "width"
      },
      typography:{
        DEFAULT:{
          css: {
            color: "#9ca3af",
            "h1, h2, h3, h4, h5, h6": {
              margin: 0,
              color: "inherit",
            },
            p: {
              fontSize: "1.5rem",
              lineHeight: 1.5,
            },
            strong: {
              color: "inherit",
            },
            blockquote: {
              color: "inherit",
              lineHeight: 1.4,
              borderLeft: "0.5rem solid #b6bac2",
              background: "rgba(98, 98, 98, .2)",
            },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
            "blockquote > p": {
              fontSize: "1.4rem",
              padding: "1.2rem 1.6rem 1.2rem 0",
            },
            "ul li": {
              fontSize: "1.3rem",
              color: "#d1d5db",
              marginBottom: "0.2rem",
            },
          },
        }

      }
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
}
