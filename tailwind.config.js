/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        blue: '#2c9fd8',
        lightblue: '#BED1CF',
        lightgray: '#EEEDEB',
        gray: '#070F2B',
        green: '#31c2a9',
        red: '#D24545',
        white: '#ffffff'
      }
    }
  },
  plugins: [],
}