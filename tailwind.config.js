/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'searchthree': '3px',
      },
      fontFamily: {
        navText: ['Roboto'],
      },
    },
  },
  plugins: [],
}