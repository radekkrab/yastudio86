/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'bona': 'Bona Nova',
        'ptser': 'PT Serif Caption'
      },
      animation: {
        'fadein': 'fadein 0.5s ease-in-out',
        'fadeout': 'fadeout 0.5s ease-in-out'
      },
      keyframes: {
        fadein: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0px)' },
        },
        fadeout: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
      },

  },
  plugins: [],
}

