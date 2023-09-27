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
        'norpe-green': '#046546',
        'lime': '#37C22B',
        'aquamarine': "#0EAA78",
        'blue': '#1877F2',
      },
    },
  },
  plugins: [],
}

