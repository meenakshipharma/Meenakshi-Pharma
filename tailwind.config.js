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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'sans-serif'],
        poppins: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 6px 25px -5px rgba(11, 78, 140, 0.08), 0 2px 10px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(11, 78, 140, 0.06)',
        'glow': '0 0 25px -5px rgba(28, 138, 60, 0.3)',
        'card-hover': '0 16px 32px -8px rgba(11, 78, 140, 0.14), 0 6px 16px -4px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
