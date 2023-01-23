/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          400: "#865DF8"
        },
        alt: {
          400: "#F8CA5D"
        }
      },
      fontFamily: {
        "sans": ["Nunito", ...defaultTheme.fontFamily.sans],
        poppins: "Poppins",
      }
    },
  },
  plugins: [],
}
