/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#020617',
        secondary: '#64748b',
        ig: '#cd486b',
        linkedin: '#007bb5',
        wa: '#25d366'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

