/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        lightblue: "#6C9EE9",
        dimwhite: "#CCCCCC",
        dimblack: "#363636",
      },
    },
  },
  plugins: [],
};
