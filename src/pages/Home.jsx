import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { EventLinearText } from "../components/EventLinearText";
import { Gallery } from "../components/Gallery";
import { Events } from "../components/Events";
import Cardhome from "../components/Cardhome.jsx";
import LogoHome from "@/assets/home/LogoHome.png";
import { useTranslation } from "react-i18next"; // Importa el hook para traducciones
import "./home.css";

export const Home = () => {
  const { t } = useTranslation(); // Usa el hook para obtener las traducciones
  const cardsSectionRef = useRef(null);
  const [buttonText] = useState(); 
  // Obtiene el texto del botón en el idioma seleccionado

  const handleButtonClick = () => {
    if (cardsSectionRef.current) {
      const element = cardsSectionRef.current;
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - 50, behavior: "smooth" });
    }
    // setButtonText(t('buttons.')); // Cambia el texto del botón al hacer clic
  };

  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex flex-col text-white">
        <div className="mt-[120px] md:mt-20">
          <EventLinearText />
        </div>
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <img src={LogoHome} alt="Logo Home" className="h-12 md:h-16 lg:h-19" />
          <div className="flex items-center justify-center mt-4">
            <p className="text-[20px] sm:text-3xl md:text-3xl lg:text-3xl font-bold">
              {t('Inicio')} {/* Obtiene la traducción para 'Inicio' */}
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-full max-w-4xl py-10 px-6 flex gap-4 justify-center">
              <button
                onClick={handleButtonClick}
                className="bg-blue-800 font-mono text-white py-2 px-4 rounded text-xl hover:bg-black hover:text-white transition duration-300"
              >
                  {t('buttons.recommendedClubs')} {/* Obtiene la traducción para 'freeEvents' */}
                  </button>
              <button className="bg-pink-500 font-mono text-white py-2 px-4 rounded text-xl hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out">
                <Link to="/egirls" className="flex items-center justify-center w-full h-full">
                  {t('buttons.freeEvents')} {/* Obtiene la traducción para 'freeEvents' */}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-full">
        <Gallery />
      </div>

      <div className="events__container bg-black">
        <Events />
      </div>

      <div className="bg-white flex flex-col items-center">
        <div className="w-full max-w-4xl py-10" ref={cardsSectionRef}>
          <p className="text-5xl font-bold text-center mb-8">
            {t('sections.discoverParties')} {/* Obtiene la traducción para 'discoverParties' */}
          </p>
          <div className="flex flex-col items-center">
            <Cardhome />
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">DECOTEA</h2>
              <p className="text-gray-400 font-bold">
                {t('footer.description')} {/* Obtiene la traducción para 'footer.description' */}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('footer.quickLinks')}</h3> {/* Obtiene la traducción para 'footer.quickLinks' */}
              <ul className="text-gray-400">
                <li className="mb-2">
                  <Link to="/" className="hover:underline font-bold">
                    {t('footer.home')} {/* Obtiene la traducción para 'footer.home' */}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/egirls" className="hover:underline font-bold">
                    {t('footer.pulseGirls')} {/* Obtiene la traducción para 'footer.pulseGirls' */}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('footer.contact')}</h3> {/* Obtiene la traducción para 'footer.contact' */}
              <p className="text-gray-400 font-bold">Email: pulseprojectx@gmail.com</p>
              <p className="text-gray-400 font-bold">Teléfono: +34 604319181</p>
              <p className="text-gray-400 font-bold">Teléfono: +34 642408794</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 font-bold pb-10">
            &copy; {new Date().getFullYear()} DECOTEA. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
