module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          10: "#F9F9FC",
        },
      },

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },

      keyframes: {
        introSlideIn: {
          "0%": {
            transform: "translate-y-12",
            background: 'yellow'
          },
          "50%": {
            transform: "translate-y-6",
          },
          "100%": {
            transform: "translate-y-0",
          },
        },
      },

      animation: {
        "intro-slide-in": "introSlideIn 5s ease-out",
      },
    },
  },
  plugins: [],
};
