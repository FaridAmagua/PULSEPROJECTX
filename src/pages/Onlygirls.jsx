import React from "react";
import { useTranslation } from "react-i18next";
import { EventLinearText } from "../components/EventLinearText";

const FORM_URL = import.meta.env.VITE_ONLYGIRLSX_FORM_URL || "#";
const WHATSAPP_COMMUNITY_URL = import.meta.env.VITE_ONLYGIRLSX_WHATSAPP_URL || "#";

export const OnlyGirlsX = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-[80px]">
        <EventLinearText
          text1="ONLYGIRLSX"
          url1={FORM_URL}
          text2="JOIN WHATSAPP"
          url2={WHATSAPP_COMMUNITY_URL}
          color1="text-white"
          color2="text-pink-500"
        />
      </div>

      <div className="flex-grow flex items-start justify-center pb-20">
        <div className="w-full max-w-3xl my-8 mx-6">
          <h1 className="text-5xl font-bold mb-2 text-center">
            {t("onlyGirlsX.title")}
          </h1>
          <p className="text-base text-center font-semibold text-gray-200 mb-8">
            {t("onlyGirlsX.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white font-bold py-3 px-5 rounded hover:bg-pink-600 text-center"
            >
              {t("onlyGirlsX.buttons.joinWhatsapp")}
            </a>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-bold py-3 px-5 rounded hover:bg-gray-200 text-center"
            >
              {t("onlyGirlsX.buttons.requestAccess")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyGirlsX;
