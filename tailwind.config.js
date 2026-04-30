/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf6f0',
          100: '#faebdb',
          200: '#f3d4b5',
          300: '#ebb585',
          400: '#e09455',
          500: '#d67835',
          600: '#c05f29',
          700: '#9f4823',
          800: '#803a22',
          900: '#68311f'
        },
        cream: '#fdf8f3',
        ink: '#1a1410'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}