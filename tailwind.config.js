module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      width: {
        "200%": "200%",
        "6xl": "1152px",
      },
      colors: {
        "gray-600": "#4B5563",
        "brown-dark": "#84502B",
        "blue-dark": "#252F3F"
      },
      maxWidth: {
        "4/5": "80%",
      },
      minWidth: {
        "10": "2.5rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
