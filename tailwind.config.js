import { type } from 'os';
import { text } from 'stream/consumers';

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
        },
        tags: {
          bg: {
            html5: '#E44D26',
            css: '#264DE4',
            javascript: '#F7DF1E',
            typescript: '#007ACC',
            bootstrap: '#7952B3',
            tailwindcss: '#06B6D4',
            react: '#61DAFB',
            python: '#3776AB',
            docker: '#2496ED',
            mysql: '#4479A1',
            postgresql: '#336791',
            express: '#000000',
            nodejs: '#8CC84B',
            mongodb: '#47A248',
            flask: '#000000',
          },
          text: {
            html5: '#FFFFFF',
            css: '#FFFFFF',
            javascript: '#000000',
            typescript: '#FFFFFF',
            bootstrap: '#FFFFFF',
            tailwindcss: '#FFFFFF',
            react: '#000000',
            python: '#FFFFFF',
            docker: '#FFFFFF',
            mysql: '#FFFFFF',
            postgresql: '#FFFFFF',
            express: '#FFFFFF',
            nodejs: '#000000',
            mongodb: '#FFFFFF',
            flask: '#FFFFFF'
          }
        }
      },
      spacing: {
        'tagbadge-x': '6px',
        'pf-1': '5px',
        'pf-2': '10px',
        'pf-3': '15px',
        'pf-4': '20px',
        'pf-5': '25px',
        'pf-6': '30px',
        'pf-7': '35px',
        'pf-8': '40px',
        'pf-9': '45px',
        'pf-10': '50px',
        'pf-sb': '70px'
      },
      width: {
        'cont': '700px'
      }
    }
  },
  safelist: [
    { pattern: /bg-tags-bg-(html5|css|javascript|typescript|bootstrap|tailwindcss|react|python|docker|mysql|postgresql|express|nodejs|mongodb|flask)/ },
    { pattern: /text-tags-text-(html5|css|javascript|typescript|bootstrap|tailwindcss|react|python|docker|mysql|postgresql|express|nodejs|mongodb|flask)/ },
  ],
  plugins: [],
}

