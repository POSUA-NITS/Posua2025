export default {
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom extra small screen
        '2xl': '1440px', // Custom extra-large screen
        '4k': '2560px',  // Custom ultra-wide screen
      },
    },
  },
    plugins: {
      "@tailwindcss/postcss": {},
    }
  }