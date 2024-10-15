/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      fontSize:{
        base:'1.2rem'
      },
      colors: {
        // 'regal-primary': 'rgb(248 250 252)',
        "yellow-1": "#F5E401", // Define una variable con el nombre `custom-yellow`
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        "scroll-back": "scrollBack 15s linear infinite",
        scrollalert:"scroll 12s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" }, // Comienza fuera del contenedor a la derecha
          "100%": { transform: "translateX(-100%)" }, // Termina fuera del contenedor a la izquierda
        },
        scrollBack: {
          "0%": { transform: "translateX(-100%)" }, // Comienza fuera del contenedor a la izquierda
          "100%": { transform: "translateX(100%)" }, // Termina fuera del contenedor a la derecha
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

