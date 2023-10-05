import React from "react";
import monitoreo from "../assets/01Monitoreo_y_respuesta.png";
import alarmas from "../assets/02Alarmas_de_Robo.png";
import deteccion from "../assets/03Deteccion_de_Incendios.png";
import cctv from "../assets/04SistemasCCTV.png";
import servicios from "../assets/servicios.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Services = () => {
  const sections = [
    {
      id: "monitoreo",
      title: "MONITOREO Y RESPUESTA",
      description:
        "El sistema de alarmas enviará señales a nuestro centro de monitoreo con toda la actividad del sistema. Ante eventos de emergencia, uno de nuestros móviles concurrirá al lugar.",
      imageSrc: monitoreo,
    },
    {
      id: "alarmas",
      title: "ALARMAS DE ROBO",
      description:
        "El sistema dará aviso ante cualquier incidente o posible intrusión de su casa o negocio.",
      imageSrc: alarmas,
    },
    {
      id: "deteccion",
      title: "DETECCIÓN DE INCENDIOS",
      description:
        "El sistema emite una alerta ante la existencia de fenómenos inherentes al fuego. Todas las instalaciones se realizan acorde a la normativa vigente y con elementos homologados por la DNB.",
      imageSrc: deteccion,
    },
    {
      id: "cctv",
      title: "SISTEMAS DE CCTV",
      description:
        "Proporciona vigilancia continúa y grabación de cámaras de seguridad implementando las últimas tecnologías en la materia.",
      imageSrc: cctv,
    },
  ];
  return (
    <div className="flex flex-col bg-light-gray">
      <img src={servicios} />
      {sections.map((section, index) => (
        <div
          key={section.id}
          // Revierte el orden del contenido
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img className="h-96 aspect-video" src={section.imageSrc} />
          <div className="flex-grow text-center w-full sm:w-full md:w-1/2">
            <div className="flex flex-col h-full">
              <div className="text-2xl mt-10 font-medium text-norpe-green">
                <strong>{section.title}</strong>
              </div>
              <div className="grid place-content-center text-justify mx-24 text-xl text-gray-500 flex-grow">
                {section.description}
              </div>
              <div className="flex justify-center items-end m-4">
                <Link to="/contacto">
                  <Button
                    size="lg"
                    className="bg-norpe-green hover:bg-aquamarine rounded-3xl"
                    variant="filled"
                  >
                    SOLICITAR MÁS DETALLES
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
