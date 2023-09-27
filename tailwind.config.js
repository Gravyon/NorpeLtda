/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'green': '#046546',
        'light-green': '#0EAA78',
        'lime': '#37C22B',
        'blue': '#1877F2',
      },
    },
  },
  plugins: [],
}

