/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif']
      },
      colors: {
        dinner: '#d9d9d9',
        conference: '#ffabab',
        party: '#8992e0',
        museum: '#f3b13d',
        culture: '#ecd896'
      }
    },
  },
  plugins: [],
}