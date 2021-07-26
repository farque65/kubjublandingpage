const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bee-picture': "url('https://drive.google.com/uc?id=1kuqKC-EtgfVnfK2gGD0zrEoBsLFc4kCv')",
        'kubjub-instagram': "url('https://drive.google.com/uc?id=16WXtD-NkQoyPxD600-FY-1TdL37XUix0')"
      }),
      colors: {
        orange: colors.orange,
        yellow: {
          050: '#fffdf5',
          550: '#fcbf32'
        },
      },
      fontFamily: {
        'arista': ['Arista Pro Trial']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
