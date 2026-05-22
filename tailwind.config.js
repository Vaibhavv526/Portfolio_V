/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          bg: {
            dark: '#000000',
            darkObsidian: '#0b0b0c',
            light: '#f5f5f7',
            lightSolid: '#ffffff'
          },
          text: {
            darkPrimary: '#f5f5f7',
            darkSecondary: '#86868b',
            lightPrimary: '#1d1d1f',
            lightSecondary: '#6e6e73'
          },
          blue: '#0071e3',
          card: {
            dark: 'rgba(22, 22, 23, 0.8)',
            light: 'rgba(255, 255, 255, 0.8)'
          }
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      letterSpacing: {
        tightest: '-0.022em',
        tighter: '-0.011em'
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}
