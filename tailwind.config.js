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
      },
      spacing: {
        'pf-1': '5px',
        'pf-2': '10px',
        'pf-3': '15px',
        'pf-4': '20px',
        'pf-5': '25px',
        'pf-6': '30px',
        'pf-7': '35px',
        'pf-8': '40px',
        'pf-9': '45px',
        'pf-10': '50px'
      },
      width: {
        'cont': '390px'
      }
    }
  },
  plugins: [],
}

