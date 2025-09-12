/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eclipse': {
          50: '#f8f7ff',
          100: '#f0edff',
          200: '#e4dcff',
          300: '#d1c0ff',
          400: '#b899ff',
          500: '#9c6eff',
          600: '#8b47ff',
          700: '#7c2dff',
          800: '#6b1fff',
          900: '#5a0fff',
        },
        'nebula': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        'void': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'eclipse': 'eclipse 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(156, 110, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(156, 110, 255, 0.8)' },
        },
        eclipse: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
        }
      },
      backgroundImage: {
        'nebula-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #5a0fff 50%, #c026d3 75%, #0f172a 100%)',
        'eclipse-gradient': 'radial-gradient(circle at center, #9c6eff 0%, #5a0fff 50%, #0f172a 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
