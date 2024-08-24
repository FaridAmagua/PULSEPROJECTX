/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';
// Usa el alias o la ruta relativa correcta
// importa otras imágenes si es necesario
import Imginstagram from "@/assets/instagram-home.png";
//card
import Imgcard1 from "@/assets/card1.jpg";
import Imgcard2 from "@/assets/card2.jpg";
import Imgcard3 from "@/assets/card3.jpg";
import Imgcard4 from "@/assets/card4.jpg";
import Imgcard5 from "@/assets/card5.jpg";
import Imgcard6 from "@/assets/card6.jpg";
import Imgcard7 from "@/assets/card7.jpg";
import Imgcard8 from "@/assets/card8.jpg";



export const Gallery = () => {
  return (
    <div className="main__container">
      <div className="container__1 block ">
        <div className="flex items-center space-x-4">
          {/* Contenedor de la primera imagen */}
          <div className="w-10 h-10 flex-shrink-0">
            <img
              src={Imginstagram}
              alt="Instagram"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Contenedor de imagenes */}
          <div className="flex-1">
            <span className="text-lg font-semibold">PULSEMADRIDX</span>
          </div>
        </div>
      </div>
      <div className="container__swiper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0} // Ajusta el espacio entre las diapositivas
          slidesPerView={6} // Número de diapositivas visibles a la vez
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            430: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            2560: {
              slidesPerView: 6,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide>
            <img src={Imgcard1} className="img-fluid rounded-top" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Imgcard2} className="img-fluid rounded-top" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Imgcard3} className="img-fluid rounded-top" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Imgcard4} className="img-fluid rounded-top" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Imgcard5} className="img-fluid rounded-top" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Imgcard6} className="img-fluid rounded-top" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Imgcard7} className="img-fluid rounded-top" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Imgcard8} className="img-fluid rounded-top" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;