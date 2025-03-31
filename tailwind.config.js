/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        header:'#28347F',
        headerHover:'#9C9CFA'
      }
    },
  },
  plugins: [],
}