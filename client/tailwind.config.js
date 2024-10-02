/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#EC6608',
        'primary-color-hover': '#D35B07',
        'secondary-color': '#FFFFFF',
        'black': '#000000',
        'gray-color': '#3D4144'
      }
    },
  },
  plugins: [],
}