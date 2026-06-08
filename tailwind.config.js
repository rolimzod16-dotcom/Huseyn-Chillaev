/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // Light hand-drawn cartoon style only (white background)
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        paper: '#ffffff',
        accent: '#5eead4',
        'accent-dark': '#14b8a6',
      },
      fontFamily: {
        'comic': ['"Comic Neue"', 'Comic Sans MS', 'system-ui', 'sans-serif'],
        'display': ['"Comic Neue"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
