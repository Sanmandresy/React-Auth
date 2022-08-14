/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
    },
    colors: {
      transparent: 'transparent',
      'white' : '#ffffff',
      'black' : '#000000',
      'emerald' : '#115e59',
      'eme9' : '#064e3b',
      'eme5': '#34d399',
      'eme6':'#059669',
      'blog':'#e3e3e9',
      'gray':'#1f2937',
      'gray-500':'rgb(107 114 128)',
      'card':'#f3f4f6',
      'zinc':'#3f3f46',
      'stone':'#57534e',
      'eo':'#e8e8e8',
      'eo2':'#e0e0e0',
      'hei':'rgb(211,168,78)',
      'heid':'rgb(171,130,42)',
      'slate-300':'#CBD5E1',
      'red-600':'#DC2626',
      'facebook':"#2563eb",
      'google':"#818cf8",
      'blue':"#1d4ed8",
      'grg':'#e0e7ff'
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
