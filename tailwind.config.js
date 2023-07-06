/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "4xl": ["4px 4px 0 rgba(239,255,0,1)", "8px 8px 0 rgba(159,225,240,1)"],
      },
      fontFamily: {
        // typewriter: ["Raleway", "sans-serif"],
        typewriter: ["Special Elite", "cursive"],
        han: ["Black Han Sans", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        georgia: ["Georgia Pro", "serif"],
      },
      colors: {
        greyBlack: "#1D1D1D",
        lightGrey: "#EBEBEB",
        yellow: "#EFFF00",
        blackButton: "#3C3635",
        beigeText: "#E7E4D4",
        minervaAboutr: "#A17F7D",
        minervaAboutl: "#A98B89",
        hoverbeigeText: "#CFCDBE",
        cardBackground: "#CBC8C5",
        greySubtitle: "#474747",
        titleColor: "#CBC8C5",
        footerBackground: "#3C3635",
        yellowBackground: "#292929",
        white: "#FFFFFF",
        blue: "#9FE1F0",
        blackish: "#171717",
        pink: "#DE99FF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
