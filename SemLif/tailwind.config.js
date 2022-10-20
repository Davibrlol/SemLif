/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {},
  },
}