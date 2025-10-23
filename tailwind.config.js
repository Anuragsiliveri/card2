/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'floral-pink': '#F8E8E8',
        'soft-ivory': '#FDF7F0',
        'warm-beige': '#F5F1E8',
        'cream': '#FFF8F0',
        'rose-gold': '#E8B4B8',
        'sage-green': '#A8C8A8',
        'lavender': '#D8BFD8'
      },
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
        'serif': ['Playfair Display', 'serif']
      },
      animation: {
        'page-flip': 'pageFlip 0.8s ease-in-out',
        'bloom': 'bloom 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        pageFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(-90deg)' },
          '100%': { transform: 'rotateY(0deg)' }
        },
        bloom: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}
