module.exports = {
  mode: 'jit',
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
  plugins: [require('@tailwindcss/forms')],
}
