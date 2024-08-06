/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundImage: theme => ({
        'stripes': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
      }),
      fontFamily: {
        custom: ["Gilroy", ""],
        Gilroy:["Gilroy",""],
        Gilroy1 : ['GILROY1']
      },
      colors: {
        "button-bg": "#3563E9",
        "heading-blue":"#564FFD",
        "text-orange":"#FF835F",
        "sad-blue": {
          100: "#2933E6",
          200: "#020DE0",
        },
        "lightgray": "#3C4242",
        "greyTwo":"#EFEFEF",
        "greyThree":"#F3F2FA",
        "tablegrey1":"#F9F9F9",
        "tablegrey2":"#FDFDFD",
        "lightblue":"rgb(53,99,233,0.1)",
      },
      screens: {
        "4xl": "2000px",
      },
      keyframes: {
        "trans-right": {
          "0%,50%": { transform: "translateX(1200px)" },
          // '25%,50%':{transform: 'translateX(500px)'},
          // '100%':{transform:'translateX(0px)'}
        },
      },
      animation: {
        "trans-right": "trans-right 0.6s ease-in-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
