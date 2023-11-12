/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'open': 'cubic-bezier(0.075, 0.82. 0.165, 1)'
      }
    },
    fontFamily: {
      'sans': ["Belleza", 'sans-serif']
    }
  },
  plugins: [],
}