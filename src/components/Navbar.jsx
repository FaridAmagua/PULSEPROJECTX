import "./navbar.css";
import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const items = [
    { name: "INICIO", link: "/" },
    { name: "PULSEGIRLS", link: "/egirls" },
    { name: "COLABORACIONES", link: "/collabs" },
    // { name: "CONTACTO", link: "/contact" },
  ];
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const collapseRef = useRef(null);
  const hiderBars = () => {
    collapseRef.current.setAttribute("class", "hidden");
    setToggleNavbar(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-1xl">PULSEPROJECT</h1>
        {/* Desktop device */}
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
        </ul>
        {/* Mobile version */}
        <div className="md:hidden">
          <Hamburger
            color="rgb(156 163 175)"
            size={24}
            toggled={toggleNavbar}
            toggle={setToggleNavbar}
          />
        </div>
      </div>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
