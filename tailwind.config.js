/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'popins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'Oswald': ['Roboto', 'sans-serif'],
      'Lato': ['Lato', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}