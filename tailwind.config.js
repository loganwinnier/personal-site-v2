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
          'light-acc': '#ffe171',
          'dark': '#005249',
          'dark-acc': '#00755e'
        },
        'secondary': {
          'light': '#F4F4F4',
          'light-2': '#EDEDED',
          'light-acc': '#ffcb91',
          'dark': '#333333',
          'dark-dark': '#2B2B2B',
          'dark-light': '#575757'
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

