import React from "react";
import visita from "../assets/visita.png";
import llamanos from "../assets/llamanos.png";
import correo from "../assets/correo.png";
const HelpSection = () => {
  const helpInfo = [
    {
      title: "VISITANOS EN NUESTRA OFICINA",
      text: "18 de Julio 509 Colonia del Sacramento URUGUAY",
      imageSrc: visita,
    },

    {
      title: "ENVIANOS UN EMAIL",
      text: `Escríbenos por correo electrónico haciendo clic aquí`,

      imageSrc: correo,
    },
    { title: "LLÁMANOS", text: "+598 4522 4413", imageSrc: llamanos },
  ];

  return (
    <div className="grid place-items-center m-4 sm:m-8 md:m-12 lg:m-24 xl:m-32 bg-norpe-green rounded-xl">
      <div className="text-white">
        <p className="text-3xl m-4 sm:m-6 md:m-8 lg:m-10 xl:m-10">
          ¿NECESITAS AYUDA?
        </p>
      </div>
      <div className="flex flex-row justify-center sm:flex-row sm:justify-between mb-4 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 text-norpe-green">
        {helpInfo.map((item, id) => (
          <div
            key={id}
            className="mx-4 sm:mx-8 md:mx-10 lg:mx-10 xl:mx-10 mb-4 sm:mb-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-center bg-white"
          >
            <img
              src={item.imageSrc}
              className="mx-auto mb-2 m-2 mt-2"
              alt={item.title}
            />
            <p className="text-sm">{item.title}</p>
            {item.text ===
            "Escríbenos por correo electrónico haciendo clic aquí" ? (
              <p className="my-4 mx-1">
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
  );
};

export default HelpSection;
