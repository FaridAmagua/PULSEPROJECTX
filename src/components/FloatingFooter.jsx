import React, { useState } from "react";
import instagramIcon from "@/assets/icons/instagram.png";
import whatsAppIcon from "@/assets/icons/whatsapp.png";
import EmailIcon from "@/assets/icons/email.png";
import ArrowUp from "@/assets/icons/arrow.png";

const FloatingFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bg-black border rounded-tl-lg border-black bottom-0 right-0 shadow-md p-4 z-50">
      {isExpanded && (
        <div className="flex flex-col items-end space-y-4 mb-4">
          <a
            href="https://wa.me/34604319181"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsAppIcon} alt="WhatsApp" className="h-10 w-10" />
          </a>
          <a
            href="https://instagram.com/farid_rbn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="h-10 w-10" />
          </a>
          <a
            href="mailto:faridamagua@live.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={EmailIcon} alt="Email" className="h-10 w-10" />
          </a>
        </div>
      )}
      <button onClick={toggleExpand} className="focus:outline-none">
        <img
          src={ArrowUp}
          alt="Expand"
          className={`h-10 w-10 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default FloatingFooter;
