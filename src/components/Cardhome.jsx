// eslint-disable-next-line no-unused-vars
import React from "react";
// import "./card.css";
//imagenes
import Imgfitz from "@/assets/card-fitz.gif";
import Imgnazca from "@/assets/card-nazca.gif";
import Imgohmyclub from "@/assets/card-ohmyclub.gif";
import Imgshokomadrid from "@/assets/card-shoko-madrid.gif";
import Imgmon from "@/assets/card-mon.gif";

const Cardhome = () => {
  // Definir el diccionario de datos
  const cardData = [
    {
      title: "FITZ MADRID",
      description:
        "¡El club que está arrasando! Ven a disfrutar de conciertos con artistas internacionales que están en boca de todos.",
      image: Imgfitz, // Usa la variable de la imagen sin llaves adicionales
      code_dressed: "Arreglado",
      url1: "https://fitzclubmadrid.com/",
      url2: "https://wa.me/message/SG7R44Q336VZO1",
    },
    {
      title: "OHMYCLUB",
      description:
        "Explora la vida nocturna de Madrid con un toque de elegancia. ¡Prepárate para fiestas y conciertos que te harán brillar!",
      image: Imgohmyclub,
      code_dressed: "Elegante",
      url1: "https://smdgroup.club/es/farid",
      url2: "https://wa.me/message/SG7R44Q336VZO1",
    },
    {
      title: "SHOKO",
      description:
        "Para todos, con el mejor ambiente y actuaciones de los artistas más famosos del momento. Únete a la fiesta y vive la experiencia única.",
      image: Imgshokomadrid,
      code_dressed: "Casual",
      url1: "https://shokomadrid.com/eventos/",
      url2: "https://wa.me/message/SG7R44Q336VZO1",
    },
    {
      title: "MON",
      description:
        "La mejor música del momento y un ambiente universitario se fusionan para una fiesta inolvidable. ¡Vive la noche al máximo con nosotros!",
      image: Imgmon,
      code_dressed: "Arreglado",
      url1: "https://www.fourvenues.com/es/roberson-farid-amagua-lema",
      url2: "https://wa.me/message/SG7R44Q336VZO1",
    },
    {
      title: "NAZCA",
      description:
        "El club para los jóvenes que buscan disfrutar de la mejor música latina y electrónica en un ambiente lleno de energía.",
      image: Imgnazca,
      code_dressed: "Arreglado",
      url1: "https://xceed.me/es/madrid/club/nazca-events-club",
      url2: "https://wa.me/message/SG7R44Q336VZO1",
    },

    // Añade más objetos de tarjeta si lo necesitas
  ];

  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="max-w-sm w-full lg:max-w-full lg:flex justify-center h-auto mb-4"
        >
          <div
            className="h-[260px] lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            title={card.title}
          ></div>
          <div className="border-r border-b border-l border-black-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {card.title}
              </div>
              <p className="text-black text-base">{card.description}</p>
              {card.code_dressed && (
                <p className="text-sm text-black flex items-center mt-4">
                  <svg
                    className="fill-current text-black 500 w-6 h-6 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="m240-522-40 22q-14 8-30 4t-24-18L66-654q-8-14-4-30t18-24l230-132h70q9 0 14.5 5.5T400-820v20q0 33 23.5 56.5T480-720q33 0 56.5-23.5T560-800v-20q0-9 5.5-14.5T580-840h70l230 132q14 8 18 24t-4 30l-80 140q-8 14-23.5 17.5T760-501l-40-20v361q0 17-11.5 28.5T680-120H280q-17 0-28.5-11.5T240-160v-362Zm80-134v456h320v-456l124 68 42-70-172-100q-15 51-56.5 84.5T480-640q-56 0-97.5-33.5T326-758L154-658l42 70 124-68Zm160 177Z" />
                  </svg>
                  {card.code_dressed}
                </p>
              )}
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                <button className="bg-black border text-white px-4 py-2 rounded hover:bg-white hover:text-black focus:outline-none focus:ring-2">
                  <a href={card.url1} target="_blank" rel="noopener noreferrer">
                    ENTRADAS
                  </a>
                </button>
                <button className="bg-white border text-black px-4 py-2 rounded hover:bg-black hover:text-white focus:outline-none focus:ring-2">
                  <a href={card.url2} target="_blank" rel="noopener noreferrer">
                    RESERVA MESA
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cardhome;
