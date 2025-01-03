module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        payToneOne: ['PaytoneOne'],
        karla: ['Karla']
      },
      colors: {
        thisBlack: '#372731',
        lightPink: '#f3bfe1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.bg-gradientcustom': {
          background: 'linear-gradient(to bottom right, #a6a0ff, #d3a0ff, #fff9a0)',
        },
        '.bg-gradientcustom2': {
          background: 'linear-gradient(to bottom right, #e0f0f9, #f6deec, #eeedb6)',
        }
      })
    }
  ],
}
