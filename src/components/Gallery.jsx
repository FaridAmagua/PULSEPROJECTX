/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';

import Imginstagram from "@/assets/instagram-home.png";

// Cargamos TODAS las imágenes de /src/assets/gallery automáticamente.
// Tipos soportados: jpg, jpeg, png, gif, webp
const imagesEntries = Object.entries(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,gif,webp}', {
    eager: true,
    as: 'url',
  })
);

// Orden por nombre de archivo (útil si nombras 1,2,3...)
// También generamos un alt accesible desde el nombre del archivo.
const images = imagesEntries
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, url]) => ({
    url,
    alt: path
      .split('/').pop()            // nombre.ext
      .replace(/\.[^.]+$/, '')     // nombre
      .replace(/[-_]/g, ' '),      // guiones -> espacios
  }));

export const Gallery = () => {
  return (
    <div className="main__container">
      <a
        href="https://www.instagram.com/pulsemadridx/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="container__1 block">
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
              {/* <span className="text-lg font-semibold">PULSEPROJECTX</span> */}
            </div>
          </div>
        </div>
      </a>

      <div className="container__swiper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={6}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320:  { slidesPerView: 1, spaceBetween: 0 },
            430:  { slidesPerView: 1, spaceBetween: 0 },
            640:  { slidesPerView: 4, spaceBetween: 0 },
            768:  { slidesPerView: 4, spaceBetween: 0 },
            1024: { slidesPerView: 4, spaceBetween: 0 },
            2560: { slidesPerView: 6, spaceBetween: 0 },
          }}
        >
          {images.map(({ url, alt }, idx) => (
            <SwiperSlide key={idx}>
              <img src={url} className="img-fluid rounded-top" alt={alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
