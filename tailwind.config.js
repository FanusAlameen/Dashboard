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
        mediumgrey: '#F5F5F5',
        gray: '#070F2B',
        green: '#31c2a9',
        darkgreen: '#49be25',
        lightgreen: '#DCFFB7',
        yellow: '#e7c81b',
        lightyellow: '#f5f1a4',
        red: '#D24545',
        white: '#ffffff'
      }
    }
  },
  plugins: [],
}