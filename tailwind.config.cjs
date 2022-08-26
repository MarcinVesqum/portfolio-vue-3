/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      spacing: {
        '144': '48rem'
      }
      
    },
    fontFamily:{
      niunito:['Nunito', 'sans-serif']
    }
    
  },
  plugins: [],
}
