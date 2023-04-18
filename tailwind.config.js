/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'darkgrey': '#28282E',
      'mediumgrey': '#36363E',
      'lightgrey': '#6C6C7B',
      'jobyblue': '#006AC6',
      'white': '#ffffff',
      'black': '#000000',
    },
    fontFamily: {
      sans: ['Inter', '__Inter_e7970e', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

