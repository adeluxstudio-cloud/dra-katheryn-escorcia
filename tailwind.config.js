/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A1012',
          espresso: '#241719',
          charcoal: '#332325',
          cream: '#FAF6F0',
          'cream-light': '#FDFBF8',
          'cream-card': '#F7EFE9',
          nude: '#EFE2D8',
          border: '#E8D7CF',
          // Aesthetic Rose Palette (From carousel images)
          rose: '#B05C55',
          'rose-hover': '#9C4740',
          'rose-light': '#D4867F',
          'rose-blush': '#F8EBE8',
          'rose-deep': '#281719',
          'rose-gold': '#DEAC9E',
          gold: '#C5A880',
          terracotta: '#B05C55',
          'terracotta-dark': '#8F423C',
          'terracotta-light': '#D4867F',
          muted: '#80706B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
