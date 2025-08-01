/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'primary':{
          DEFAULT: '#776B5D',
          50: '#F3EEEA',
        },
        'secondary': '#B0A695',
        'accent': '#EBE3D5',
        
      },
    },
  },
  plugins: [],
}

