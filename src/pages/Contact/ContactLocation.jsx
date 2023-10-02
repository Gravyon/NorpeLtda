import React from "react";
import Iframe from "react-iframe";
import { FaLocationDot } from "react-icons/fa6";

const ContactLocation = () => {
  return (
    <div className="py-16 px-12 bg-norpe-green text-white ">
      <p className="text-center mb-10 text-4xl">¿DONDE ESTAMOS?</p>
      <div>
        <div className="text-2xl xl:float-left"></div>
        <div className="text-lg px-10 xl:text-justify">
          <p className="flex">
            <div className="text-3xl">
              <FaLocationDot />
            </div>{" "}
            18 de Julio 509 Colonia del Sacramento URUGUAY
          </p>
          <div className="ml-8">
            <p>Horario de atención: </p>
            <p>Lunes a Viernes 8:30 a 12:00 y de 14:00 a 18:30</p>
            <p>Sábados: 8:30 a 12:30</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center rounded-xl mt-5">
        <Iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.245027100883!2d-57.84617262550477!3d-34.47130787300198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a31268a17c5017%3A0x6eea4e5c8f049afe!2s18%20de%20Julio%20509%2C%2070000%20Col.%20del%20Sacramento%2C%20Departamento%20de%20Colonia%2C%20Uruguai!5e0!3m2!1spt-BR!2sbr!4v1695840435992!5m2!1spt-BR!2sbr"
          // width="400"
          height="500"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>
    </div>
  );
};

export default ContactLocation;
