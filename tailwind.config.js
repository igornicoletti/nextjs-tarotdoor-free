const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2e3832',
        'secundary': '#aa5a22',
        'tertiary': '#ffd997',
      },
      fontFamily: {
        'herculanum': 'Herculanum, sans-serif',
        'raleway-bold': 'Raleway-Bold, sans-serif',
        'raleway-light': 'Raleway-Light, sans-serif',
        'raleway-black': 'Raleway-Black, sans-serif',
        'raleway-medium': 'Raleway-Medium, sans-serif',
        'raleway-regular': 'Raleway-Regular, sans-serif',
        'raleway-semiBold': 'Raleway-SemiBold, sans-serif',
        'raleway-extraBold': 'Raleway-ExtraBold, sans-serif',
        'raleway-semiBoldItalic': 'Raleway-SemiBoldItalic, sans-serif',
      },
      backgroundImage: {
        'tarotdoor-texture': 'url("/images/tarotdoor_background.svg")'
      },
      width: {
        'calc-4': 'calc(100% + 1rem)',
        'calc-8': 'calc(100% + 2rem)'
      },
      height: {
        'calc-hash': 'calc(100vh - 10rem)'
      },
      minHeight: {
        'calc-20': 'calc(100vh - 5rem)',
        'calc-28': 'calc(100vh - 7rem)'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) =>
      addUtilities({
        '.perspective': { 'perspective': '1000px' },
        '.preserve-3d': { 'transformStyle': 'preserve-3d' },
        '.backface-hidden': { 'backfaceVisibility': 'hidden' },
        '.rotate-x-90': { 'transform': 'rotateX(90deg)' },
        '.rotate-x-180': { 'transform': 'rotateX(180deg)' },
        '.-rotate-x-90': { 'transform': 'rotateX(-90deg)' },
        '.-rotate-x-180': { 'transform': 'rotateX(-180deg)' },
        '.rotate-y-90': { 'transform': 'rotateY(90deg)' },
        '.rotate-y-180': { 'transform': 'rotateY(180deg)' },
        '.-rotate-y-90': { 'transform': 'rotateY(-90deg)' },
        '.-rotate-y-180': { 'transform': 'rotateY(-180deg)' }
      })
    ),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar')
  ]
}