import React from "react";
import whatsapp from "../assets/whatsapp.png";
import { helpInfo } from "../data/helpInfo";
const HelpSection = () => {
  const helpText = "Escríbenos por correo electrónico haciendo clic aquí";
  return (
    <section>
      <div className="grid grid-rows place-items-center md:m-12 lg:m-24 xl:m-32 bg-norpe-green rounded-xl">
        <div className="text-white">
          <p className="text-3xl m-4 sm:m-6 md:m-8 lg:m-10 xl:m-10">
            ¿NECESITAS AYUDA?
          </p>
        </div>
        <div className="flex flex-col sm:justify-center md:flex-row md:justify-between mb-4 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 text-norpe-green">
          {helpInfo.map((item, id) => (
            <div
              key={id}
              className="mx-4 sm:mt-12 md:mt-0 sm:mx-auto md:mx-10 lg:mx-10 xl:mx-10 mb-4 sm:mb-0 w-full sm:w-full md:w-1/3 lg:w-1/4 xl:w-1/4 text-center bg-white"
            >
              <img
                src={item.imageSrc}
                className="mx-auto mb-2 m-2 mt-2"
                alt={item.title}
              />
              <p className="text-sm">{item.title}</p>
              {item.text === helpText ? (
                <p className="my-4 mx-4">
                  Escríbenos por correo electrónico haciendo{" "}
                  <a
                    className="hover:text-aquamarine"
                    href="mailto:info@seguridadnorpe.com.uy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    clic aquí
                  </a>
                </p>
              ) : (
                <p className="my-4 mx-1">{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mr-5">
        <img src={whatsapp} />
      </div>
    </section>
  );
};

export default HelpSection;
