/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        soft: {
          orange: 'hsl(35, 77%, 62%)',
          red: 'hsl(5, 85%, 63%)',
        },
        neutral: {
          offwhite: 'hsl(36, 100%, 99%)',
          grayblue: 'hsl(233, 8%, 79%)',
          darkgrayblue: 'hsl(236, 13%, 42%)',
          darkblue: 'hsl(240, 100%, 5%)',
        },
      },
      fontSize: {
        pmd: '0.9375rem',
      },
    },
  },
  plugins: [],
};
