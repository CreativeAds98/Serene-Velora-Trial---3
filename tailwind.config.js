/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#061a17',
          900: '#0d3832', // Primary Brand Deep Forest Teal
          850: '#10413a',
          800: '#144c44',
          700: '#1b5f55',
          600: '#23786c',
          500: '#2d9485',
          100: '#e1edea',
          50: '#f0f7f5',
        },
        gold: {
          DEFAULT: '#b68d40', // Primary Accent Warm Ochre / Gold
          dark: '#9a7531',
          hover: '#c49a4a',
          light: '#f5edd9',
          cream: '#faf5ea',
          border: '#e5d7be',
        },
        cream: {
          DEFAULT: '#faf8f5', // Page Canvas Ivory / Cream
          light: '#fdfcfb',
          warm: '#f5f0e6',
          muted: '#ede5d5',
          border: '#e8e2d5',
        },
        charcoal: {
          DEFAULT: '#1c2826',
          heading: '#152220',
          body: '#4a5754',
          muted: '#7a8784',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'card': '0 12px 35px -8px rgba(13, 56, 50, 0.12)',
        'elevated': '0 24px 50px -12px rgba(13, 56, 50, 0.18)',
      }
    },
  },
  plugins: [],
}
