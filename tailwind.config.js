/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        header: '#1E293B',        // Slate 800 - Professional dark header
        headerHover: '#38bdf8',   // Sky 400 - Modern blue hover
        brand: {
          light: '#34d399',       // Emerald 400
          DEFAULT: '#059669',     // Emerald 600 - Main UTN color
          dark: '#064e3b',        // Emerald 900
        }
      }
    },
  },
  plugins: [],
}