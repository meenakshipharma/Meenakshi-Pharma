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
        // sans: ['"SF Pro Text"', '"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'Poppins', 'sans-serif'],
        // serif: ['"SF Pro Display"', '"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', '"SF Pro Display"', '"SF Pro Text"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'card': '0 4px 20px -2px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
