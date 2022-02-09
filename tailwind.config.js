const colors = require('tailwindcss/colors')

const withOpacity =
  variableName =>
  ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`

module.exports = {
  content: ['./src/pages/**/*.js', './src/components/**/*.js'],
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
      },
      width: {
        '1/10': '10%',
        '9/10': '90%',
      },
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
          accent: withOpacity('--color-text-accent'),
          'link-accent': withOpacity('--color-link-accent'),
          'link-accent-hover': withOpacity('--color-link-accent-hover'),
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
          'button-accent': withOpacity('--color-button-accent'),
        },
      },
      divideColor: {
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
