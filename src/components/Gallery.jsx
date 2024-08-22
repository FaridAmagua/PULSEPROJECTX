import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';


export const Gallery = () => {
  return (
    <div className="main__container">
      <div className="container__1 block ">
        <div className="flex items-center space-x-4">
          {/* Contenedor de la primera imagen */}
          <div className="w-10 h-10 flex-shrink-0">
            <img
              src="src\imgs\instagram-home.png"
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
            delay:3000,
            disableOnInteraction:false
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
            <img
              src="src\imgs\PRUEBA1.jpg"
              className="img-fluid rounded-top"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src\imgs\PRUEBA2.jpg"
              className="img-fluid rounded-top"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src\imgs\PRUEBA3.jpg"
              className="img-fluid rounded-top"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src\imgs\PRUEBA4.jpg"
              className="img-fluid rounded-top"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src\imgs\PRUEBA5.jpg"
              className="img-fluid rounded-top"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src\imgs\PRUEBA6.jpg"
              className="img-fluid rounded-top"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src\imgs\PRUEBA7.jpg"
              className="img-fluid rounded-top"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src\imgs\PRUEBA8.jpg"
              className="img-fluid rounded-top"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;