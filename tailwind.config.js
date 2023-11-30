/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./layouts/partials/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "node_modules/preline/dist/*.js",
  ],
  purge: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./layouts/partials/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
