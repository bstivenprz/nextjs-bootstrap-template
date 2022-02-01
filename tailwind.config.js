module.exports = {
  content: [
    './public/**/*.html',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF40FC',
        'secundary': '#6064FF',
        'accent': '#FFB7C7'
      },
      fontFamily: {
        rebrand: "'Rebrand Txt', sans-serif"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      textColor: ['group-hover'],
      transform: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}