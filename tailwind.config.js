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
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },
    },
    screens:{
      'ultra': '280px'
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
