/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    files: ["./*.{html,js}"],
  }
  theme: {
    extend: {
    },
  },
  plugins: [],
}

