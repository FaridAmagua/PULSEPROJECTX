/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { EventLinearText } from "../components/EventLinearText";
import { Gallery } from "../components/Gallery";
import { Events } from "../components/Events";
import Cardhome from "../components/Cardhome.jsx";


export const Home = () => {
  // Crear una referencia para la sección de las tarjetas
  const cardsSectionRef = useRef(null);

  // Estado para el texto del botón
  const [buttonText, setButtonText] = useState("Nuestros tours");

  // Función para desplazar la vista hacia la sección de tarjetas y cambiar el texto del botón
  const handleButtonClick = () => {
    if (cardsSectionRef.current) {
      // Obtén la posición del elemento y ajusta el desplazamiento
      const element = cardsSectionRef.current;
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPosition - 50, // Ajusta este valor según sea necesario
        behavior: "smooth",
      });
    }
    setButtonText("Próximamente");
  };

  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex flex-col text-white">
        <div className="mt-20 md:mt-20">
          <EventLinearText />
        </div>

        {/* Contenedor principal que ocupa el espacio restante */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="txt__title">PULSE MADRID</h1>
          <div className="flex items-center justify-center mt-4">
            <p className="text-[20px] sm:text-3xl md:text-3xl lg:text-3xl font-bold">
              LAS MEJORES FIESTAS Y EVENTOS
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-full max-w-4xl py-10 px-6 flex gap-4 justify-center">
              <button
                onClick={handleButtonClick}
                className="bg-blue-800 font-mono text-white py-2 px-4 rounded text-xl hover:bg-black hover:text-white transition duration-300"
              >
                Clubs recomendados
              </button>
              <button className="bg-pink-500 font-mono text-white py-2 px-4 rounded text-xl hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out">
                <Link
                  to="/egirls"
                  className="flex items-center justify-center w-full h-full"
                >
                  Eventos PULSEGIRLS
                </Link>
              </button>

              {/* <button
                onClick={handleButtonClick}
                className="bg-white font-mono text-black py-2 px-4 rounded text-xl hover:bg-black hover:text-white transition duration-300"
              >
                {buttonText}
              </button> */}
              <button></button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-full ">
        <Gallery />
      </div>

      {/* SECTION 2 */}
      <div className="events__container bg-black">
        <Events />
      </div>

      <div className="bg-white flex flex-col items-center">
        <div className="w-full max-w-4xl py-10" ref={cardsSectionRef}>
          <p className="text-5xl font-bold text-center mb-8">
            Descubre nuestras fiestas
          </p>
          <div className="flex flex-col items-center">
            <Cardhome />
          </div>
        </div>
      </div>


      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo y Descripción */}
            <div>
              <h2 className="text-2xl font-bold mb-2">PULSE PROJECT</h2>
              <p className="text-gray-400 font-bold">
                Sumérgete en el universo del ocio nocturno con Pulse Project.
                Aquí encontrarás la mejor vibra nocturna, eventos emocionantes y
                una experiencia que hará latir tu corazón al ritmo de la noche.
              </p>
            </div>
            {/* Enlaces Rápidos */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Enlaces Rápidos</h3>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <Link to="/" className="hover:underline font-bold">
                    INICIO
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/egirls" className="hover:underline font-bold">
                    PULSEGIRLS
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <a href="#contact" className="hover:underline font-bold">
                    Contacto
                  </a>
                </li> */}
              </ul>
            </div>
            {/* Información de Contacto */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Contacto</h3>
              <p className="text-gray-400 font-bold">
                Email: pulseprojectx@gmail.com
              </p>
              <p className="text-gray-400 font-bold">Teléfono: +34 604319181</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#facebook"
                  className="text-gray-400 hover:text-white"
                ></a>
                <a href="#twitter" className="text-gray-400 hover:text-white">
                  {/* <img src "src/assets/twitter.svg" alt="Twitter" className="w-6 h-6" /> */}
                </a>
                <a
                  href="#instagram"
                  className="text-gray-400 hover:text-white"
                ></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 font-bold">
            &copy; {new Date().getFullYear()} Pulse Project. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
