/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,jpg}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        'google': ['"Quicksand"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'resume': "url('./picture/R21.jpg')"
      }
    },
  },
  plugins: [],
}

