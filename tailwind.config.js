/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        primary: "#2979FF",
        accent: "#FF9100",
      },
      screens: {
        xl: "1200px",
      },
    },
  },
  plugins: [],
}
