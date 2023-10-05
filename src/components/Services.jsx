import React from "react";
import servicios from "../assets/servicios.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { sections } from "../data/services";

const Services = () => {
  return (
    <div className="flex flex-col bg-light-gray">
      <img src={servicios} className="bg-white" />
      {sections.map((section, index) => (
        <div
          key={section.id}
          // Revierte el orden del contenido
          className={`flex flex-col ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <img
            className="h-auto md:w-1/2 aspect-video"
            src={section.imageSrc}
          />
          <div className=" text-center w-full sm:w-full md:w-1/2">
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
