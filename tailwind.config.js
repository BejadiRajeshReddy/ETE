/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px'
      }
    },
    extend: {
      scrollBehavior: {
        smooth: 'smooth'
      },
      colors: {
        border: '#D5D9E0',
        background: '#fff',
        foreground: '#6b645c',
        primary: {
          DEFAULT: '#1e81b0'
        },
        text: {
          DEFAULT: '#384044',
          foreground: '#7a7a84'
        }
      },
      backgroundImage: {
        'custom-gradient-1':
          'linear-gradient(99.31deg, #4C74E6 -.26%, #8D54E9 75.14%)',
        'custom-gradient-2':
          'linear-gradient(101.25deg, #FB8556 25.5%, #FFE663 112.14%)',
        'custom-gradient-3':
          'linear-gradient(99.31deg, #7A6EFF 8.33%, #FFBFBF 100.43%)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        hideTemporarily: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'text-reveal': {
          '0%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(0, 0)' }
        },
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'hide-temporarily': 'hideTemporarily 1s ease-in-out forwards',
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        'loop-scroll': 'loop-scroll 30s linear infinite'
      },

      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans]
      },
      letterSpacing: {
        heading: '-0.0275em',
        base: '0em'
      },
      lineHeight: {
        base: '130%',
        tight: '96.5%',
        none: '0%'
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      fontSize: {
        'base-small': 'var(--text-base--small)',
        base: 'var(--text-base)',
        'base-large': 'var(--text-base--large)',
        'heading-1': 'var(--heading-1)',
        'heading-2': 'var(--heading-2)',
        'heading-3': 'var(--heading-3)',
        'heading-4': 'var(--heading-4)',
        'heading-5': 'var(--heading-5)',
        'heading-6': 'var(--heading-6)',
        'heading-display': 'var(--heading-display)',
        'heading-footer': 'var(--heading-footer)',
        'heading-number': 'var(--heading-number)',
        'heading-normal': 'var(--heading-normal)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
