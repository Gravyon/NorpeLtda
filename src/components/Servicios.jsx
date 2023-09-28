import React from "react";
import monitoreo from "../assets/01Monitoreo_y_respuesta.png";
import alarmas from "../assets/02Alarmas_de_Robo.png";
import deteccion from "../assets/03Deteccion_de_Incendios.png";
import cctv from "../assets/04SistemasCCTV.png";
import { Button } from "@material-tailwind/react";

const Servicios = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-screen-xl  flex justify-center md:h-full lg:h-96 sm:h-auto mt-5 mb-5">
        <div className="flex flex-col md:flex-row">
          <div className="text-center w-full sm:w-full md:w-full xl:w-full md:h-full lg:h-96 sm:h-auto">
            <img
              className="w-full flex-shrink-0 md:h-full lg:h-96 sm:h-auto"
              src={monitoreo}
            />
          </div>
          <div className="grid place-items-center text-center w-full sm:w-full md:w-1/2">
            <div className="text-2xl font-medium text-norpe-green">
              <strong>MONITOREO Y RESPUESTA</strong>
            </div>
            <p className="text-justify mt-5 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
              El sistema de alarmas enviará señales a nuestro centro de
              monitoreo con toda la actividad del sistema. Ante eventos de
              emergencia, uno de nuestros móviles concurrirá al lugar.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl  flex justify-center md:h-full lg:h-96 sm:h-auto mt-5 mb-5">
        <div className="flex flex-col md:flex-row">
          <div className="text-center w-full sm:w-full md:w-full xl:w-full md:h-full lg:h-96 sm:h-auto">
            <img
              className="w-full flex-shrink-0 md:h-full lg:h-96 sm:h-auto"
              src={monitoreo}
            />
          </div>
          <div className="grid place-items-center text-center w-full sm:w-full md:w-1/2">
            <div className="text-2xl font-medium text-norpe-green">
              <strong>MONITOREO Y RESPUESTA</strong>
            </div>
            <p className="text-justify mt-5 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
              El sistema de alarmas enviará señales a nuestro centro de
              monitoreo con toda la actividad del sistema. Ante eventos de
              emergencia, uno de nuestros móviles concurrirá al lugar.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl  flex justify-center md:h-full lg:h-96 sm:h-auto mt-5 mb-5">
        <div className="flex flex-col md:flex-row">
          <div className="text-center w-full sm:w-full md:w-full xl:w-full md:h-full lg:h-96 sm:h-auto">
            <img
              className="w-full flex-shrink-0 md:h-full lg:h-96 sm:h-auto"
              src={monitoreo}
            />
          </div>
          <div className="grid place-items-center text-center w-full sm:w-full md:w-1/2">
            <div className="text-2xl font-medium text-norpe-green">
              <strong>MONITOREO Y RESPUESTA</strong>
            </div>
            <p className="text-justify mt-5 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
              El sistema de alarmas enviará señales a nuestro centro de
              monitoreo con toda la actividad del sistema. Ante eventos de
              emergencia, uno de nuestros móviles concurrirá al lugar.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl  flex justify-center md:h-full lg:h-96 sm:h-auto mt-5 mb-5">
        <div className="flex flex-col md:flex-row">
          <div className="text-center w-full sm:w-full md:w-full xl:w-full md:h-full lg:h-96 sm:h-auto">
            <img
              className="w-full flex-shrink-0 md:h-full lg:h-96 sm:h-auto"
              src={monitoreo}
            />
          </div>
          <div className="grid place-items-center text-center w-full sm:w-full md:w-1/2">
            <div className="text-2xl font-medium text-norpe-green">
              <strong>MONITOREO Y RESPUESTA</strong>
            </div>
            <p className="text-justify mt-5 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
              El sistema de alarmas enviará señales a nuestro centro de
              monitoreo con toda la actividad del sistema. Ante eventos de
              emergencia, uno de nuestros móviles concurrirá al lugar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
