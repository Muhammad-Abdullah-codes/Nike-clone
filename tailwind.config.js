/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'sans-serif'],
        helvetica_compresses: ['Helvetica-Compresses', 'sans-serif'],
      },
      screens: {
        sm: '600px',
        md: '768px',
        lg: '960px',
        xl: '1280px'
      },
      height: {
        '70vh': '70vh',
        '60vh': '60vh',
        '80vh': '80vh'
       },
       width: {
        '95vw': '95vw',
        '100vw': '100vw',
       },
    },
  },
  plugins: [],
}

