/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },

      fontFamily:{
        'KumbhSans':['KumbhSans', 'sans-serif'],
      },
      
      colors:{
        'darkCyan':'#19a2ae',
        'veryDarkDesaturatedBlue':'#2d3248',
        'darkGrayishBlue':'#6a6f81',
        'darkGray':'#969696',
      },
    },
  },
  plugins: [],
}
