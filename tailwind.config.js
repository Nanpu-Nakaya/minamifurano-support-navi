/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#142143",
          light: "#ffaf00",
        },
        secondary: {
          dark: "#1a2b5d",
          light: "#e4e4e4",
        },
        accent: {
          dark: "#11225b",
          light: "#1a5d94",
        },
      },
      // colors: {
      //   primary: {
      //     dark: "#488234",
      //     light: "#91cf98",
      //   },
      //   secondary: {
      //     dark: "#fa7070",
      //     light: "#d4e7ba",
      //   },
      //   accent: {
      //     dark: "#fa7070",
      //     light: "#d4e7ba",
      //   },
      // },
      animation: {
        "slow-zoom": "slowZoom 8s ease-in-out infinite",
      },
      keyframes: {
        slowZoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
