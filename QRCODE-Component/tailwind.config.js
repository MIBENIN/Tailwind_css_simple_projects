/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container:{
        padding:{
          DEFAULT:"2rem"
        }
      },
      colors:{
        'lightGray':'hsl(212, 45%, 89%)',
        'grayishBlue':'hsl(220, 15%, 55%)',
        'darKBlue':'hsl(218, 44%, 22%)',
      },
      fontFamily:{
        'outfit':'Outfit, sans-serif',
      }
    },
  },
  plugins: [],
}

