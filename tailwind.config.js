/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        'blueish': ['#3498db', '#ffffff', '#3498db'],
      },
    },
  },
  plugins: [
  ],
}