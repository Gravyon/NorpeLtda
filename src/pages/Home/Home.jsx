import React from "react";
import { SliderCarousel } from "../../components/SliderCarousel";
import Services from "../../components/Services";
import ContactForm from "../../components/ContactForm";
import { greenForm } from "../../validations/contactSchema";
import { greenFields } from "../../data/formValues";

const Home = () => {
  return (
    <div>
      <SliderCarousel />
      <Services />
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
