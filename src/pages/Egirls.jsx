import React, { useState } from "react";
import { Lineartext } from "../components/Lineartext";

const clubsData = [
  {
    title: "OhMyClub",
    description:
      "¡Entradas gratuitas, cócteles y mesas con botella de cortesía casi todos los días de la semana! Envíanos un mensaje.",
    image: "src/imgs/card-ohmyclub.gif",
    url1: "https://smdgroup.club/es/farid",
    url2: "https://wa.me/message/SG7R44Q336VZO1",
    visible: true,
  },
  {
    title: "Nazca",
    description:
      "Botellas y entradas con copa todos los miércoles y domingos. Consulta los días disponibles en nuestra la web",
    image: "src/imgs/card-nazca.gif",
    url1: "https://xceed.me/es/madrid/club/nazca-events-club",
    url2: "https://xceed.me/es/madrid/club/nazca-events-club",
    visible: true,
  },
  {
    title: "Shoko Madrid",
    description:
      "Obtén entradas gratuitas disponibles los miércoles, viernes y algunos domingos. Contáctanos para consultar sobre la posibilidad de obtener invitaciones para conciertos y mesas especiales.",
    image: "src/imgs/card-shoko-madrid.gif",
    url1: "https://shokomadrid.com/eventos/",
    url2: "https://wa.me/message/SG7R44Q336VZO1",
    visible: true,
  },
  {
    title: "Fitz",
    description:
      "Nuestro club mas exclusivo. Contáctanos para consultar sobre la posibilidad de obtener invitaciones para conciertos y mesas especiales.",
    image: "src/imgs/card-fitz.gif",
    url1: "https://fitzclub.seetickets.com/search/all?BrowseOrder=Date",
    url2: "https://wa.me/message/SG7R44Q336VZO1",
    visible: true,
  },
];

export const Egirls = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index); // Toggle selection
  };

  return (
    <div className="pt-[5rem] bg-black text-white min-h-screen">
      <div>
        <Lineartext color1="text-[#ff0080]" />
      </div>
      <div className="flex-grow flex items-top justify-center">
        <div className="w-full max-w-4xl py-10 px-6">
          <h1 className="text-4xl font-bold mb-4">
            Explora y Disfruta Sin Costo
          </h1>
          <p className="text-lg mb-6">
            ¿Eres parte de un grupo de amigas que busca disfrutar de la noche al
            máximo? ¡Estás en el lugar indicado! Aprovecha nuestras ventajas
            exclusivas, como reservas y entradas gratuitas en los mejores clubs.
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            Clubs con entradas gratis para grupo de chicas o botellas de
            invitación.
          </h2>
          <p className="mb-6">
            Puedes acceder o preguntarnos el día que quieras asistir. Aquí
            encontrarás una lista de los clubs disponibles que te garantizan una
            experiencia nocturna inolvidable.
          </p>
          <h2 className="text-2xl font-bold pb-4">ELIGE DONDE SALIR</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clubsData.map((club, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform ${
                  selectedCard === index ? "scale-105" : ""
                }`}
                style={{ minHeight: "300px" }}
              >
                {/* Imagen de fondo */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out ${
                    selectedCard === index ? "scale-110" : "scale-100"
                  }`}
                  style={{ backgroundImage: `url(${club.image})`, zIndex: 0 }}
                />

                {/* Contenido de la tarjeta */}
                {/* Contenido de la tarjeta */}
                <div
                  className={`absolute inset-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out flex flex-col justify-between ${
                    selectedCard === index ? "opacity-100 z-10" : "opacity-0"
                  }`}
                >
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{club.title}</h4>
                    <p className="mb-4">{club.description}</p>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={club.url1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center flex-grow"
                    >
                      <span className="ml-2">Entradas</span>
                    </a>
                    <a
                      href={club.url2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center flex-grow"
                    >
                      <span className="ml-2">Mensaje</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Egirls;
