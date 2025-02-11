/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        pf: {
          light: {},
          dark: {
            '1': '#CEE3EB',
            '2': '#90B2BF',
            '3': '#588596',
            '4': '#2E5C6E',
            '5': '#103240',
            '6': '#042633',
          }
        }
      }
    },
  },
  plugins: [],
}

