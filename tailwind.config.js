/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          50: '#f0f9fa',
          100: '#dcf0f3',
          200: '#bde3ea',
          300: '#8eccdb',
          400: '#55afc5',
          500: '#088395',
          600: '#05719d',
          700: '#0a5b80',
          800: '#0e4a67',
          900: '#0f3e55',
          950: '#072637',
        },
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#36abf7',
          500: '#0c8fe9',
          600: '#0070c7',
          700: '#0159a1',
          800: '#064c84',
          900: '#0a3f6e',
          950: '#072849',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
