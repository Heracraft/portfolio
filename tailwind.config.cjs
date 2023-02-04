/** @type {import('tailwindcss').Config} */
// const colors=require("tailwindcss/colors")

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:"class",
  theme: {
    fontFamily:{
      'visuelt':['Visuelt','sans-serif'],
      'shadows':['Shadows Into Light', 'cursive']
    },
    extend:{
      colors:{
        primary:"#059669",
        onsurface:"rgb(63, 63, 70)"
      },
      screens:{
        'xs':'600px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('svg', '& svg');
    }
  ]
};