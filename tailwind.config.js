/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D1E9F6",
        beige: "#F6EACB",
        abyedh:"#f5f9fc",
        grisTxt:"#333333",
        rose:"#EECAD5",
        pastelRose:"#F1D3CE",
        secondaryGris:"#555555",
        ahmer:"#FF8A8A",

      },
      fontFamily: { // Added a colon here
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl:'5rem',
          '2xl' : '6rem',

        },
      },
    },
  },
  plugins: [],
}


