const withOpacity = variableName => ({ opacityValue }) =>
  opacityValue !== undefined
    ? `rgba(var(${variableName}), ${opacityValue})`
    : `rgb(var(${variableName}))`

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
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          background: withOpacity('--color-background'),
          foreground: withOpacity('--color-foreground'),
          'foreground-alt': withOpacity('--color-foreground-alt'),
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      borderColor: {
        skin: {
          foreground: withOpacity('--color-foreground'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
