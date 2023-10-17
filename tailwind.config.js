/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      xsm: "340px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          xsm: "1.75rem",
          sm: "1.75rem",
        },
      },
    },
    fontFamily: {
      jakarta: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
};
