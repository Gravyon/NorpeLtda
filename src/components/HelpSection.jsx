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
      text: "Escríbenos por correo electrónico haciendo clic aquí",

      imageSrc: correo,
    },
    { title: "LLÁMANOS", text: "+598 4522 4413", imageSrc: llamanos },
  ];

  return (
    <div className="grid place-items-center m-24 mx-44 bg-norpe-green rounded-xl">
      <div className="text-white">
        <p className="text-3xl m-10">¿NECESITAS AYUDA?</p>
      </div>
      <div className="flex justify-between mb-10 text-norpe-green">
        <div className="mx-10 w-64 text-center bg-white">
          <img src={visita} className="mx-auto m-2 mt-2" />
          <p className="text-lg">VISITANOS EN NUESTRA OFICINA</p>
          <p>18 de Julio 509</p>
          <p>Colonia del Sacramento</p>
          <p>URUGUAY</p>
        </div>
        <div className="mx-10 w-64 text-center bg-white">
          <img src={correo} className="mx-auto m-2 mt-2" />
          <p className="text-lg">ENVIANOS UN EMAIL</p>
          <p>Escríbenos por correo </p>
          <p>electrónico haciendo</p>
          <p>clic aquí</p>
        </div>
        <div className="mx-10 w-64 text-center bg-white">
          <img src={llamanos} className="mx-auto m-2 mt-2" />
          <p className="text-lg">LLÁMANOS</p>
          <p>+598 4522 4413</p>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
