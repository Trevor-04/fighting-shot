/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'primary': '#776B5D',
        'secondary': '#B0A695',
        'accent': '#EBE3D5',
      },
    },
  },
  plugins: [],
}

