/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  colors: {
    'green': {
      60: '#ACD8AA',
      10: '#7e5bef'
    },
    'black': '#000000',
    'white': '#FFFFFF',
    'gray': '##D7D7D7'
  },
  fontFamily: {
    sansHeading: ['League Gothic', 'sans-serif'],
    sans: ['DM Sans', 'sans-serif']
  },
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

