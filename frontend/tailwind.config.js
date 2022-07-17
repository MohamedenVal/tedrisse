/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00adb5',
          black: '#222831',
          gray: '#393e46',
          white: '#eeeeee'
        },
      }
    },
  },
  plugins: [],
}
