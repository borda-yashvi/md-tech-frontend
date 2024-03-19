/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  purge: ['./src/**/*.jsx', './src/**/*.js'],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

