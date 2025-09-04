import "./navbar.css";
import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import englishFlag from '../assets/flags/ingles.png';
import spanishFlag from '../assets/flags/espana.png';

export const Navbar = () => {
  const { i18n } = useTranslation();

  // Actualizado: ahora solo INICIO y ONLYGIRLSX
  const items = [
    { name: "INICIO", link: "/" },
    { name: "ONLYGIRLSX", link: "/onlygirlsx" },
  ];

  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const collapseRef = useRef(null);

  const hiderBars = () => {
    collapseRef.current.setAttribute("class", "hidden");
    setToggleNavbar(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
      .then(() => {
        console.log(`Idioma cambiado a: ${lng}`);
      })
      .catch((error) => {
        console.error("Error al cambiar el idioma:", error);
      });
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <NavLink to="/" className="text-1xl">
          PROYECTOX
        </NavLink>

        {/* Desktop */}
        <ul className="hidden md:flex gap-x-8 text-400">
          {items.map((item) => (
            <li key={item.link}>
              <NavLink
                to={item.link}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active"
                    : "hover:text-gray-500"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Selector idioma */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center focus:outline-none"
            >
              <img
                src={i18n.language === 'es' ? spanishFlag : englishFlag}
                alt="Current Language"
                className="w-6 h-6"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-black text-white border border-gray-700 rounded shadow-lg w-16 flex flex-col items-center">
                <button
                  onClick={() => changeLanguage('en')}
                  className="flex items-center px-2 py-2 hover:bg-gray-700 w-full justify-center"
                >
                  <img src={englishFlag} alt="English" className="w-6 h-6" />
                </button>
                <button
                  onClick={() => changeLanguage('es')}
                  className="flex items-center px-2 py-2 hover:bg-gray-700 w-full justify-center"
                >
                  <img src={spanishFlag} alt="Español" className="w-6 h-6" />
                </button>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden">
          <Hamburger
            color="rgb(156 163 175)"
            size={24}
            toggled={toggleNavbar}
            toggle={setToggleNavbar}
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={
          toggleNavbar
            ? "absolute left-0 top-16 h-screen z-10 transition-all duration-500 ease-in-out backdrop-blur-sm bg-zinc-900/30 border-solid py-4 md:hidden"
            : "absolute left-[-100vw] top-16 h-screen z-10 transition-all duration-500 ease-in-out backdrop-blur-sm bg-zinc-900/30 border-solid py-4 md:hidden"
        }
        ref={collapseRef}
      >
        <ul className="flex flex-col w-screen m-auto h-[50%] justify-center items-center text-2xl font-bold text-white">
          {items.map((item) => (
            <NavLink
              to={item.link}
              key={item.link}
              className="py-4 px-6 text-gray-400"
              onClick={hiderBars}
            >
              {item.name}
            </NavLink>
          ))}

          {/* Idioma en mobile */}
          <div className="flex flex-col items-center mt-4">
            <button onClick={() => changeLanguage('en')} className="flex items-center mb-2">
              <img src={englishFlag} alt="English" className="w-6 h-6" />
            </button>
            <button onClick={() => changeLanguage('es')} className="flex items-center">
              <img src={spanishFlag} alt="Español" className="w-6 h-6" />
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
