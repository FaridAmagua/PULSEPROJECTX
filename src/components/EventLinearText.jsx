import React from "react";

export const EventLinearText = ({
  text1 = "PELIGROSAX", // Texto predeterminado
  text2 = "PROYECTOX", // Texto predeterminado
  color1,
  color2,
  url1 = "#", // URL 1 predeterminada
  url2 = "#" // URL 2 predeterminada
}) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full">
      <div className="flex animate-scroll">
        {[...Array(8)].map((_, i) => (
          <a
            key={i}
            href={url1}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl font-bold px-4 ${color1}`}
          >
            {text1}
          </a>
        ))}
      </div>
      <div className="flex animate-scroll-back">
        {[...Array(8)].map((_, i) => (
          <a
            key={i}
            href={url2}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl font-bold px-4 ${color2}`}
          >
            {text2}
          </a>
        ))}
      </div>
    </div>
  );
};

export default EventLinearText;
