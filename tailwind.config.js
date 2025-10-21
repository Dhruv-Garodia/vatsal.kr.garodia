/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode based on 'class'
  content: [
    './index.html',
    './components/**/*.html', // Scan HTML partials
    './assets/js/**/*.js',    // Scan JS for dynamic classes if any
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'on-primary': 'var(--color-on-primary)',
        'on-secondary': 'var(--color-on-secondary)',
        'on-background': 'var(--color-on-background)',
        'on-surface': 'var(--color-on-surface)',
        // Additional shades for subtle text variations in dark mode
        'on-surface-light': 'var(--color-on-surface-light)',
        'on-surface-dark': 'var(--color-on-surface-dark)',
        'on-background-light': 'var(--color-on-background-light)',
        'on-background-dark': 'var(--color-on-background-dark)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
      keyframes: {
        'bounce-once': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-10px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        }
      },
      animation: {
        'bounce-once': 'bounce-once 1s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
