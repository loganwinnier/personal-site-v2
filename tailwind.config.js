const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'light': '#FDF8F7',
          'light-acc': '#FFDD71',
          'dark': '#005249',
          'dark-acc': '#005249'
        },
        'text': {
          'light': '#F4F4F4',
          'dark': '#333333'
        },
        'light-opacity': {
          '30': '#F4F4F4C2'
        }
      },
      fontFamily: {
        'title': ['"Lilita One"', ...defaultTheme.fontFamily.sans],
        'accent': ['"Be Vietnam Pro"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

