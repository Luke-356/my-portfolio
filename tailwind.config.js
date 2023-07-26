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
        lightwhite: "#F2F2F2",
        dimwhite: "#CCCCCC",
        dimblack: "#363636",
      },
    },

    screens: {
      lg: { max: "1272px" },
      lg1: { max: "1112px" },
      lg2: { max: "1132px" },
      lg3: { max: "1122px" },
      lg4: { max: "1070px" },
      lg5: { max: "1064px" },
      lg6: { max: "992px" },
      sm1: { max: "620px" },
      // => @media (max-width: 1023px) { ... }
    },
  },
  plugins: [],
};
