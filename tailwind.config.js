module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "200%": "200%",
        "6xl": "1152px",
      },
      fill: {
        "gray-600": "#4B5563",
      },
      maxWidth: {
        "4/5": "80%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
