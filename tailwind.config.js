/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    // Rutas para diferentes idiomas si tienes contenido separado por idiomas
    "./locales/**/*.json" // Incluye tus archivos de traducción si los estás usando
  ],
  theme: {
    extend: {
      fontSize: {
        base: '1.2rem', // Manteniendo la definición existente de fontSize
      },
      colors: {
        "yellow-1": "#F5E401", // Color personalizado existente
      },
      animation: {
        scroll: "scroll 20s linear infinite", // Definición existente para scroll
        "scroll-back": "scrollBack 15s linear infinite", // Definición para scrollBack
        scrollalert: "scroll 12s linear infinite", // Definición para scrollalert
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
  plugins: [
    require("@tailwindcss/aspect-ratio") // Manteniendo el plugin aspect-ratio
  ],
};
