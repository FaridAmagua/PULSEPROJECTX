import React, { useState, useEffect } from "react";
import { EventLinearText } from "../components/EventLinearText";
import "./egirls.css";

import Imgfitz from "@/assets/card-fitz-chicas.gif";
import Imgnazca from "@/assets/card-nazca.gif";
import Imgohmyclub from "@/assets/card-ohmyclub.gif";
import Imgshokomadrid from "@/assets/card-shoko-chicas.gif";

const clubsData = [
  {
    title: "Fitz",
    description:
      "Nuestro club más exclusivo. Contáctanos para consultar sobre la posibilidad de obtener invitaciones para conciertos y mesas especiales.",
    image: Imgfitz,
    url1: "https://www.fourvenues.com/es/peligrosax",
    url2: "https://wa.me/message/SG7R44Q336VZO1",
  },
  {
    title: "OhMyClub",
    description:
      "¡Entradas gratuitas, cócteles y mesas con botella de cortesía casi todos los días de la semana! Envíanos un mensaje.",
    image: Imgohmyclub,
    url1: "https://smdgroup.club/es/farid",
    url2: "https://wa.me/message/SG7R44Q336VZO1",
  },
  {
    title: "Nazca",
    description:
      "Botellas y entradas con copa todos los miércoles y domingos. Consulta los días disponibles en nuestra web.",
    image: Imgnazca,
    url1: "https://xceed.me/es/madrid/club/nazca-events-club",
    url2: "https://xceed.me/es/madrid/club/nazca-events-club",
  },
  {
    title: "Shoko Madrid",
    description:
      "Obtén entradas gratuitas disponibles los miércoles, viernes y algunos domingos. Contáctanos para consultarnos en conciertos.",
    image: Imgshokomadrid,
    url1: "https://shokomadrid.com/eventos/",
    url2: "https://wa.me/message/SG7R44Q336VZO1",
  },
];

export const Egirls = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 2500);
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleCardHover = (index) => {
    setSelectedCard(index);
  };

  const handleCardLeave = () => {
    setSelectedCard(null);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="mt-[40px] sm:mt-[20px] md:mt-[20px] lg:mt-[20px]">
        <a href="https://www.fourvenues.com/es/derene555/events/fitz-x-jhayco-19-09-2024-N4L5/guest-list/xm0zft2ub01o401bnehruc49m2zzp3Cr">
          <EventLinearText
            text1="CENA EN PANTHERA DISPONBILE"
            text2="MESA DE INVITACIÓN TODOS LOS MIÉRCOLES"
            color2="text-white"
          />
        </a>
      </div>
      <div className="flex-grow flex items-top justify-center">
        <div className="w-full max-w-4xl my-10 mx-6">
          <h1 className="text-4xl font-bold mb-4 text-[#f11f77] text-center">
            PELIGROSAX EVENTS
          </h1>
          <p className="text-lg mb-3">
            ¿Sois un grupo de amigas listo para la próxima aventura? ¡Descubrid
            nuestras ventajas exclusivas!&nbsp;
            <span className="animated-text">
              Botellas de invitación, entradas VIP para conciertos y acceso
              gratuito a los clubs más exclusivos de la ciudad.
            </span>
          </p>

          <p className="mb-3">
            ¿Queréis disfrutar al máximo de la vida nocturna? ¡Escríbenos y te
            informamos de todos los eventos disponibles! Restaurantes, bares,
            fiestas, y mucho más... ¡Todo lo mejor, al alcance de tu mano!
          </p>

          <h2 className="text-2xl font-bold pb-4 text-[#f11f77]">
            ¡Elige tu club y prepárate para una noche inolvidable!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
            {clubsData.map((club, index) => (
              <div
                key={index}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform ${
                  selectedCard === index || showDetails ? "scale-105" : ""
                }`}
                style={{ minHeight: "300px" }}
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out ${
                    selectedCard === index || showDetails
                      ? "scale-110"
                      : "scale-100"
                  }`}
                  style={{ backgroundImage: `url(${club.image})`, zIndex: 0 }}
                />

                <div
                  className={`absolute inset-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out flex flex-col justify-between ${
                    selectedCard === index || showDetails
                      ? "opacity-100 z-10"
                      : "opacity-0"
                  }`}
                >
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{club.title}</h4>
                    <p className="mb-4 text-[14px]">{club.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={club.url1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-800 hover:bg-blue-700 text-white font-bold px-1 py-2 rounded-sm flex items-center justify-center flex-grow"
                    >
                      <span className="text-[13px]">Entradas</span>
                    </a>
                    <a
                      href={club.url2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-1 rounded flex items-center justify-center flex-grow"
                    >
                      <span className="text-[13px]">Mensaje</span>
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
