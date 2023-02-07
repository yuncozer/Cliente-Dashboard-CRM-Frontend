/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6276e5",
        secondary: {
          900: "#131517",
          100: "#1E1F25"
        }  
      }
    },
  },
  plugins: [],
});