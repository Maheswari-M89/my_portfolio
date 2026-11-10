/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: '#0B0811',
          900: '#110D1A', // Base midnight plum background
          800: '#1B1426', // Card / surface background
          700: '#251C34', // Elevated surface
          600: '#322647', // Border / subtle highlight
          500: '#473663',
        },
        lavender: {
          light: '#F8FAFC', // Soft white
          muted: '#A8A0B5', // Muted lavender-gray
          dim: '#7E768E',
        },
        violetAccent: {
          DEFAULT: '#C084FC', // Soft violet main accent
          light: '#D8B4FE',
          dark: '#9333EA',
          glow: 'rgba(192, 132, 252, 0.25)',
        },
        warmGold: {
          DEFAULT: '#FBBF24', // Warm gold accent
          light: '#FDE68A',
          hover: '#F59E0B',
          glow: 'rgba(251, 191, 36, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'plum-glow': '0 0 25px -5px rgba(192, 132, 252, 0.25)',
        'gold-glow': '0 0 25px -5px rgba(251, 191, 36, 0.25)',
        'card-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(192, 132, 252, 0.12)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 3s infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-16px) scale(1.02)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

