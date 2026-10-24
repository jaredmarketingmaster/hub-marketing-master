/** @type {import('tailwindcss').Config} */

// Identidad visual Marketing Master HUB
// Principales: Azul #1A73E8 · Gris #4A4A4A
// Secundarios: Azul #2D3748 · Celeste #37B1AB
// Las escalas blue / emerald / slate se reemplazan por las de marca, así cada
// clase de color del sitio usa la paleta oficial sin tocar los componentes.
const brandBlue = {
  50: '#EEF5FE',
  100: '#D9E8FC',
  200: '#B6D3FA',
  300: '#85B5F5',
  400: '#4F95EE',
  500: '#2B80EA',
  600: '#1A73E8', // principal
  700: '#1560C4',
  800: '#154F9C',
  900: '#16437C',
  950: '#102A4D',
}

const brandAqua = {
  50: '#EEFBFA',
  100: '#D4F4F2',
  200: '#ADE8E5',
  300: '#78D6D1',
  400: '#4FC4BE',
  500: '#37B1AB', // secundario
  600: '#2A8F8A',
  700: '#26726F',
  800: '#245B59',
  900: '#214C4A',
  950: '#0F2E2D',
}

const brandNeutral = {
  50: '#F7F9FB',
  100: '#EEF1F5',
  200: '#E2E7EE',
  300: '#CBD2DC',
  400: '#9AA3B0',
  500: '#6B7380',
  600: '#4A4A4A', // gris principal
  700: '#3D4452',
  800: '#333B49',
  900: '#2D3748', // azul secundario
  950: '#1A202C',
}

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Bahnschrift', 'Barlow', 'Lato', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        blue: brandBlue,
        emerald: brandAqua,
        slate: brandNeutral,
        brand: { DEFAULT: '#1A73E8', hover: '#1560C4', gray: '#4A4A4A', navy: '#2D3748', aqua: '#37B1AB' },
      },
      keyframes: {
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'modal-in': {
          from: { opacity: '0', transform: 'translateY(12px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'tab-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'modal-in': 'modal-in 240ms cubic-bezier(0.16, 1, 0.3, 1)',
        'tab-in': 'tab-in 260ms ease-out',
      },
    },
  },
  plugins: [],
}
