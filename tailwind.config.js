import fs from 'fs';
const themeConfig = JSON.parse(fs.readFileSync('./src/theme.json', 'utf8'));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: themeConfig.colors,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'card': '0 4px 20px -2px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
