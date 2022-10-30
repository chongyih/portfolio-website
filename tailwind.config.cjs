/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
        'title': ['Great Vibes', 'cursive'],
        'body': ['Cormorant Garamond', 'serif']
    },
    extend: {
      'animation': {
          'gradient-x':'gradient-x 12s ease infinite',
          'gradient-y':'gradient-y 12s ease infinite',
          'gradient-xy':'gradient-xy 12s ease infinite',
          'swing': 'swing 3s linear infinite',
          'scroll': 'scroll 1.5s linear infinite',
          'scroll-lg': 'scroll-lg 1.5s linear infinite'
      },
      'keyframes': {
          'gradient-y': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'center top'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'center center'
              }
          },
          'gradient-x': {
              '0%, 100%': {
                  'background-size':'200% 200%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'gradient-xy': {
              '0%, 100%': {
                  'background-size':'400% 400%',
                  'background-position': 'left center'
              },
              '50%': {
                  'background-size':'200% 200%',
                  'background-position': 'right center'
              }
          },
          'swing': {
            '0%, 50%, 100%': {
                transform: 'rotateY(0deg) rotate(0deg)'
            },
            '25%': {
                transform: 'rotateY(0deg) rotate(20deg)'
            },
            '75%': {
                transform: 'rotateY(0deg) rotate(-20deg)'
            }
          },
          'scroll': {
            '0%': {
                bottom: '2.5rem',
                opacity: '100%'
            },
            '100%': {
                bottom: '1.5rem',
                opacity: '0%'
            }
          },
          'scroll-lg': {
            '0%': {
                bottom: '1.75rem',
                opacity: '100%'
            },
            '100%': {
                bottom: '1.25rem',
                opacity: '0%'
            }
          }
      }
    }
  },
  plugins: [],
};
