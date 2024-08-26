import React from "react";

export const Collabs = () => {
  return (
    <div className="pt-[60px] bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        ¡COLABORA CON NOSOSOTROS!
      </h1>
      <p className="mb-4 text-lg md:text-xl">
        ¿Eres influencer, deportista o una personalidad conocida? ¡Estamos
        buscando colaboradores como tú! Explora nuestras exclusivas
        oportunidades: botellas personalizadas, invitaciones VIP y servicios
        únicos diseñados solo para ti.
      </p>
      <p className="mb-6 text-lg md:text-xl">
        ¡Haz clic en el botón y escríbenos para descubrir más!
      </p>
      <a
        href="https://wa.me/message/SG7R44Q336VZO1"
        className="bg-white text-black py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
      >
        Contáctanos
      </a>
    </div>
  );
};

export default Collabs;
