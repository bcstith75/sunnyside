/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkCyan2: 'hsl(168, 34%, 41%)',

        veryDarkBlue: 'hsl(212, 27%, 19%)',
        veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
        darkGrayishBlue: 'hsl(232, 10%, 55%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',

      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'sans-serif'],
      },
      backgroundImage: {
        'desktop-hero-image': "url('../images/desktop/image-header.jpg')",
        'mobile-hero-image': "url('../images/mobile/image-header.jpg')",
        'design-section-image': "url('../images/mobile/image-graphic-design.jpg')",
        'photo-section-image': "url('../images/mobile/image-photography.jpg')",
     },
      spacing: {
        180: '32rem',
      },
    },
  },
  plugins: [],
}

