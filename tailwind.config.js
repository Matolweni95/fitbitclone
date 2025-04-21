// tailwind.config.js
module.exports = {
  content: [
    "./src/*/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'google-blue': '#4285F4',
        'google-red': '#EA4335',
        'google-yellow': '#FBBC05',
        'google-green': '#34A853',
        'blue-light': '#E8F0FE',
        'gray-light': '#F8F9FA',
        'gray-darker': '#5F6368',
      },
      fontFamily: {
        'google-sans': ['Google Sans', 'Roboto', 'sans-serif'],
      },
    },
   
  },
  plugins: [],
}