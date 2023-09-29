import React from "react";
import monitoreo from "../assets/01Monitoreo_y_respuesta.png";
import alarmas from "../assets/02Alarmas_de_Robo.png";
import deteccion from "../assets/03Deteccion_de_Incendios.png";
import cctv from "../assets/04SistemasCCTV.png";
import servicios from "../assets/servicios.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="flex flex-col">
      <img src={servicios} />
      <div id="monitoreo" className="flex flex-col md:flex-row">
        <img className="h-80 md:w-1/2" src={monitoreo} />
        <div className="text-center h-80 w-full sm:w-full md:w-1/2 bg-light-gray">
          <div className="text-2xl mt-10 font-medium text-norpe-green">
            <strong>MONITOREO Y RESPUESTA</strong>
          </div>
          <div className="text-justify mt-5 mx-24 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
            El sistema de alarmas enviará señales a nuestro centro de monitoreo
            con toda la actividad del sistema. Ante eventos de emergencia, uno
            de nuestros móviles concurrirá al lugar.
          </div>
          <Link to="/contacto">
            {" "}
            <Button
              size="lg"
              className="bg-norpe-green mb-5 hover:bg-aquamarine rounded-3xl"
              variant="filled"
            >
              SOLICITAR MÁS DETALLES
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div
          id="alarmas"
          className="text-center h-80 w-full sm:w-full md:w-1/2 bg-light-gray"
        >
          <div className="text-2xl mt-10 font-medium text-norpe-green">
            <strong>ALARMAS DE ROBO</strong>
          </div>
          <div className="text-justify mt-5 mx-24 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
            El sistema dará aviso ante cualquier incidente o posible intrusión
            de su casa o negocio.
          </div>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-norpe-green mt-5 hover:bg-aquamarine rounded-3xl"
              variant="filled"
            >
              SOLICITAR MÁS DETALLES
            </Button>
          </Link>
        </div>
        <img className="h-80 md:w-1/2" src={alarmas} />
      </div>
      <div className="flex flex-col md:flex-row">
        <img className="h-80 md:w-1/2" src={deteccion} />
        <div
          id="deteccion"
          className="text-center h-80 w-full sm:w-full md:w-1/2 bg-light-gray"
        >
          <div className="text-2xl mt-10 font-medium text-norpe-green">
            <strong>DETECCIÓN DE INCENDIOS</strong>
          </div>
          <p className="text-justify mt-5 mx-24 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
            El sistema emite una alerta ante la existencia de fenómenos
            inherentes al fuego. Todas las instalaciones se realizan acorde a la
            normativa vigente y con elementos homologados por la DNB.
          </p>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-norpe-green mb-5 hover:bg-aquamarine rounded-3xl"
              variant="filled"
            >
              SOLICITAR MÁS DETALLES
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div
          id="cctv"
          className="text-center h-80 w-full sm:w-full md:w-1/2 bg-light-gray"
        >
          <div className="text-2xl mt-10 font-medium text-norpe-green">
            <strong>SISTEMAS DE CCTV</strong>
          </div>
          <div className="text-justify mt-5 mx-24 xl:mb-12 md:mb-12 sm:mb-0 text-xl text-gray-500">
            Proporciona vigilancia continúa y grabación de cámaras de seguridad
            implementando las últimas tecnologías en la materia.
          </div>
          <Link to="/contacto">
            <Button
              size="lg"
              className="bg-norpe-green mb-5 hover:bg-aquamarine rounded-3xl"
              variant="filled"
            >
              SOLICITAR MÁS DETALLES
            </Button>
          </Link>
        </div>
        <img className="h-80 md:w-1/2" src={cctv} />
      </div>
    </div>
  );
};

export default Servicios;
