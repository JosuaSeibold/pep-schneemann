/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // For H1
      h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // For H2
      h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // For H3
      h4: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }], // For H4
      h5: ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }], // For H5
      h6: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // For H6
    },
    extend: {},
  },
  plugins: [],
}