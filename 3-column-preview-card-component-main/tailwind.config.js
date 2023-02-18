/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
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
      colors:{
        'BrightOrange':'#e38826',
        'DarkCyan':'#006970',
        'VeryDarkCyan':'#004241',
        'TransparentWhite':'#ffffff',
        'VeryLightGray':'#f2f2f2',
      },
      fontFamily:{
        'BigShouldersDisplay':['Big Shoulders Display', 'cursive'],
        'LexandDeca':[ 'Lexend Deca', 'sans-serif'],
      },
      fontWeight:{
        'normal':'400',
        'bold':'700',
      }
    },
  },
  plugins: [],
}
