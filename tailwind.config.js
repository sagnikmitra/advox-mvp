/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        agrandir: ['Agrandir', 'sans-serif'],
        'agrandir-wide': ['Agrandir Wide', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef3ff',
          100: '#dbe5ff',
          200: '#bfd0ff',
          300: '#94b0fe',
          400: '#6485fb',
          500: '#4261f6',
          600: '#2c41eb', // Primary blue
          700: '#2434cd',
          800: '#222ea6',
          900: '#232d83',
          950: '#171b4b',
        },
        secondary: {
          50: '#fff8eb',
          100: '#ffecc6',
          200: '#ffd685',
          300: '#ffbc45',
          400: '#DDB786', // Secondary gold
          500: '#d19c5f',
          600: '#c68544',
          700: '#a56a32',
          800: '#85562b',
          900: '#6d4725',
          950: '#3a2513',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#0b0c0e',
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};