module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      inset: {
        2: '0.5rem',
        4: '1rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'odd'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    pointerEvents: ['responsive', 'disabled'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
