import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        border: 'rgb(var(--surface-border) / <alpha-value>)',
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'rgb(var(--brand-primary) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--brand-navy) / <alpha-value>)',
        },
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
      }
    },
  },
  plugins: [],
}

export default config
