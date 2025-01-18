/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'curvy-desktop': "url('/images/bg-curvy-desktop.svg')",
        'curvy-mobile': "url('/images/bg-curvy-mobile.svg')",
      },
      colors: {
        'custom-main': 'hsla(218, 28%, 13%, 1)',
        primary: {
          'Intro': 'hsl(217, 28%, 15%)',
          'main': 'hsl(218, 28%, 13%)',
          'footer': 'hsl(216, 53%, 9%)',
          'testimonials': 'hsl(219, 30%, 18%)',
        },
        accents: {
          cyan: 'hsl(176, 68%, 64%)',
          blue: 'hsl(198, 60%, 50%)',
          'light-red': 'hsl(0, 100%, 63%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};