/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#252934",
        primary: "#252934",
        secondary: "#282D38",
        accent: "#E31B6D",
      },
      flex: {
        initial: "1 0 300px",
      },
      boxShadow: {
        "3xl": "0 0px 45px -15px #E31B6D",
      },
    },
  },
  plugins: [],
};
