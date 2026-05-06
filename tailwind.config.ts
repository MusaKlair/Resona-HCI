import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EE7052', // Coral/Peach
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#0A1128', // Deep Navy
          foreground: '#FFFFFF',
        },
        background: '#FFFFFF', // Stark White
        accent: '#94A3B8', // Muted Silver
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0A1128',
        },
        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        }
      },
      fontFamily: {
        serif: ['Canela', 'Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 50px -12px rgba(0, 0, 0, 0.1)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

export default config
