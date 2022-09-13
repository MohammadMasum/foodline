/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'dark': '#1B1B1B',
        'orange': '#F37500',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
