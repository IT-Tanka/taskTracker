
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: 'rgba(255, 255, 0.9)', 
        lightBackground1: '#d2d5da63',
        darkBackground: 'rgba(51, 51, 51, 0.93)',
        lightText: '#333333',
        darkText: '#f7fafc',
        customPurple: {
          600: '#9678c5',
          900: '#6a4e94',
        },
        'gray-100-transparent': '#e5e7ebe8', 
        grey:'#6f7b8c' 
      },
      backgroundImage: {
        'ground': "url('@/assets/images/ground-light.webp')",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  
      },
    },
  },
  darkMode: 'class',  
  plugins: [],
}
