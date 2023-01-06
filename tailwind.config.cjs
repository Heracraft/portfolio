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
   
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};