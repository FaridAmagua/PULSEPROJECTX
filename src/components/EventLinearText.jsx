import React from 'react';

export const EventLinearText = ({ color1, color2 }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap w-full">
      <div className="flex animate-scroll">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`text-4xl font-bold px-4 ${color1}`}>
            PULSEPROJECT
          </span>
        ))}
      </div>
      <div className="flex animate-scroll-back">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`text-4xl font-bold px-4 ${color2}`}>
            PROYECTOX
          </span>
        ))}
      </div>
    </div>
  );
};
export default EventLinearText;