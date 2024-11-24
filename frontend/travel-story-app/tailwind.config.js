/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:["Poppins","sans-serif"],
    },


    extend: {
      //colors used in the project
      colors:{
        primary:"#0586D3",
        secondary:"#EF863E",
      },

      backgroundImage:{
        'login-bg-img':"url('./src/assets/images/bg-image1.png')",
        'signup-bg-img':"url('./src/assets/images/signup-bg.png')"
      }
    },
  },
  plugins: [],
}

