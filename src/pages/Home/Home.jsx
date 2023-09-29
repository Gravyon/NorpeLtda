import React from "react";
import { SliderCarousel } from "../../components/SliderCarousel";
import Servicios from "../../components/Servicios";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  const fields = [
    { name: "Nombre", label: "Nombre", required: true },
    { name: "Correo", label: "Correo", type: "email", required: true },
    { name: "Telefono", label: "Telefono", type: "tel", required: true },
    { name: "Mensaje", label: "Mensaje", type: "textarea", required: true },
  ];
  return (
    <div>
      <SliderCarousel />
      <Servicios />
      <ContactForm
        color="green"
        fields={fields}
        title="Cotiza tu servicio aquí"
      />
    </div>
  );
};

export default Home;
