/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('./assets/Logo_Head.png')",
      },
      colors: {
        'white': '#FFFFFF',
        'norpe-green': '#046546',
        'lime': '#37C22B',
        'aquamarine': "#0EAA78",
        'blue': '#1877F2',
        'light-gray': '#EFEFEF'
      },
    },
  },
  plugins: [],
})

