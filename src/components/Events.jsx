import React from "react";
import './events.css';

export const Events = () => {
  return (
    <a
      href="https://fitzclub.seetickets.com/event/fitz-x-tyga/fitz-club/3124283"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative overflow-hidden whitespace-nowrap w-full cursor-pointer">
        <div className="flex animate-scrollalert">
          {[...Array(16)].map((_, i) => (
            <span key={i} className={`text-4xl font-bold px-4 text-white`}>
              PROXIMO EVENTO
            </span>
          ))}
        </div>
        <div className="flex animate-scrollalert">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-white text-3xl">
              CONCIERTO DE TYGA 27 AGOSTO<span>&nbsp;</span>
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Event;