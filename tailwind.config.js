/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Shantell Sans ', 'sans-serif'], // Add 'Roboto' as the default sans font
        custom: ['Raleway', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
