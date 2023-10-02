import React from "react";
import { SliderCarousel } from "../../components/SliderCarousel";
import Servicios from "../../components/Servicios";
import ContactForm from "../../components/ContactForm";
import { greenForm } from "../../validations/contactSchema";

const Home = () => {
  const fields = [
    { name: "fname", label: "Nombre:*", textarea: false },
    { name: "email", label: "Correo:*", type: "email", textarea: false },
    { name: "phone", label: "Telefono:", type: "tel", textarea: false },
    { name: "message", label: "Mensaje:*", type: "text", textarea: true },
  ];
  return (
    <div>
      <SliderCarousel />
      <Servicios />
      <ContactForm
        color="green"
        fields={fields}
        title="Cotiza tu servicio aquí"
        validation={greenForm}
      />
    </div>
  );
};

export default Home;
