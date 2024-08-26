/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";

export const Contact = () => {

  const[email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-[100vh] text-white">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md pt-5">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contacta con nosotros
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Necesitas entradas,conciertos o dudas con tu reserva no dudes en
          ponerte en contacto con nosotros.
        </p>
        <form action="#" class="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Tu correo
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="email@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Asunto del contacto
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Podemos ayudarte"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-white dark: text-white"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Motivo del contacto..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white 700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
