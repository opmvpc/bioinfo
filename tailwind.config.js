const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      app: colors.teal,
      primary: colors.indigo,
      secondary: colors.teal,
      warning: colors.yellow,
      danger: colors.red,
      transparent: "transparent",
      current: "currentColor",
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      indigo: colors.indigo,
      teal: colors.teal,
      lime: colors.lime,
      rose: colors.rose,
      black: colors.black,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        inter: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
