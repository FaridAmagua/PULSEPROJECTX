import React from "react";

export const Collabs = () => {
  return (
    <div className="pt-[60px] bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
        ¡COLABORA CON NOSOTROS!
      </h1>

      {/* Texto descriptivo */}
      <p className="mb-6 text-lg md:text-xl leading-relaxed max-w-2xl">
        ¿Eres influencer, deportista o una personalidad conocida?
      </p>

      {/* Descripción detallada */}
      <p className="text-md md:text-lg mb-8 text-justify max-w-lg px-4 md:px-0">
        Estamos buscando colaboradores como tú! Explora nuestras exclusivas
        oportunidades: botellas personalizadas, invitaciones VIP y servicios
        únicos diseñados solo para ti.
      </p>

      {/* Botón de contacto */}
      <a
        href="https://wa.me/message/SG7R44Q336VZO1"
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 hover:from-pink-600 hover:to-red-600 transition-colors duration-300 text-xl font-semibold"
      >
        Contáctanos
      </a>
    </div>
  );
};

export default Collabs;
