/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'bounce-once': 'bounce 1s 2',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}