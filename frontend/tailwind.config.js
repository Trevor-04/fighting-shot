/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        'primary': {
          DEFAULT: '#FFFFFF'
        },
        'secondary': '#E6E6FA',
        'accent': {
            DEFAULT: '#9696ea',
            50: '#8e8ee8',
        },
      },
    },
  },
  plugins: [],
}

