/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-100': 'linear-gradient(to bottom, #091E26 0%, #00131C 100%)',
      },
      colors: {
        dark: {
          100: '#000405',
          200: '#00070A',
          300: '#000204',
          400: '#000A0F',
          500: '#000C12',
          600: '#00111A',
          700: '#001119',
          800: '#0D161B',
          900: '#0D1D25',
          1000: '#192227',
        },
        light: {
          100: '#FFFFFF',
          200: '#FFFAF1',
          300: '#E1E1E6',
          400: '#C4C4CC',
          500: '#7C7C8A',
          600: '#76797B',
          700: '#4D585E',
        },
        tomato: {
          100: '#750310',
          200: '#92000E',
          300: '#AB222E',
          400: '#AB4D55',
        },
        carrot: {
          100: '#FBA94C',
        },
        mint: {
          100: '#04D361',
        },
        cake: {
          100: '#065E7C',
          200: '#82F3FF',
        },
      }
    },
  },
  plugins: [],
}