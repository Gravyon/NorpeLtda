import React from "react";
import { SliderCarousel } from "../../components/SliderCarousel";
import Servicios from "../../components/Servicios";
import ContactForm from "../../components/ContactForm";
import { greenForm } from "../../validations/contactSchema";
import { greenFields } from "../../helpers/formValues";

const Home = () => {
  return (
    <div>
      <SliderCarousel />
      <Servicios />
      <ContactForm
        color="green"
        fields={greenFields}
        title="Cotiza tu servicio aquí"
        validation={greenForm}
      />
    </div>
  );
};

export default Home;
