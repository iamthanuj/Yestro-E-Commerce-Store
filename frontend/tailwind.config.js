/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    
    extend: {
      fontFamily:{
        roboto:['Roboto', 'sans-serif']
      },
      colors:{
        "bg-main":"#f6eddd",
        "bg-secondary":"#f5ff84",
        "bg-third":"#faff00",
        "bg-fourth":"#1a1a1a",
        "creamy":"#fafbdb",
      },
    },
  },
  plugins: [],
}

