/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ckbc: {
          navy: '#2e3973',
          pink: '#f0614b',
          light: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['var(--font-youngSerif)', 'sans-serif'],
        display: ['var(--font-lexend)', 'sans-serif'], // Great for a friendly, rounded look
      }
    }
  }
}