import React from 'react';
import instagramIcon from "@/assets/icons/instagram.png";

const FloatingFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg- shadow-md p-4 flex justify-center space-x-4 z-50">
      <a href="https://wa.me/tuNumero" target="_blank" rel="noopener noreferrer">
        <img                 src={instagramIcon} alt="WhatsApp" className="h-8 w-8 text-green-500 hover:text-green-600" />
      </a>
      {/* <a href="https://instagram.com/tuUsuario" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className="h-8 w-8 hover:text-pink-600" />
      </a> */}
    </div>
  );
};

export default FloatingFooter;
