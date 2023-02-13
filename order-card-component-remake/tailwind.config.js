/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'redhat':['Red Hat Display','sans-serif'],
      },
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
        'paleBlue':'#e0e8ff',
        'brightBlue':'#3829e0',
        'veryBrightBlue':'#f5f7ff',
        'desaturatedBlue':'#7280a7',
        'darkBlue':'#1f2f56',
      },
    },
  },
  plugins: [],
}
