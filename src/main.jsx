import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import theme from './theme.json'

// Apply theme dynamically
const root = document.documentElement;
Object.entries(theme.colors).forEach(([key, value]) => {
  const kebabKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  root.style.setProperty(`--theme-color-${kebabKey}`, value);
});

Object.entries(theme.fonts).forEach(([key, value]) => {
  root.style.setProperty(`--theme-font-${key}`, value);
});

Object.entries(theme.textSizes).forEach(([key, value]) => {
  root.style.setProperty(`--theme-text-${key}`, value);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
