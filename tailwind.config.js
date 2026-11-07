/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        crimson: {
          50: '#fff1f3',
          100: '#ffe4e8',
          200: '#fecdd4',
          300: '#fda4b4',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        obsidian: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e2',
          300: '#aeb8ca',
          400: '#8294b0',
          500: '#64748b',
          600: '#51617a',
          700: '#434f63',
          800: '#394255',
          900: '#0f172a',
          950: '#090d16',
          980: '#05070b',
        },
      },
      boxShadow: {
        ambient: '0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.08)',
        lift: '0 20px 50px -20px rgba(15, 23, 42, 0.18), 0 8px 16px -8px rgba(15, 23, 42, 0.1)',
        glow: '0 0 0 1px rgba(225, 29, 72, 0.3), 0 12px 40px -8px rgba(225, 29, 72, 0.45)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
