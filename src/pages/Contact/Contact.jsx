import React from "react";
import ContactForm from "../../components/ContactForm";
import { whiteForm } from "../../validations/contactSchema";
import { whiteFields } from "../../data/formValues";
import texto_contacto from "../../assets/texto_contacto.png";
import contactanos from "../../assets/contactanos.png";
import ContactLocation from "./ContactLocation";
const Contact = () => {
  return (
    <div>
      <img src={contactanos} alt="contactanos" />
      <img src={texto_contacto} alt="texto contacto" />
      <ContactForm
        color="white"
        fields={whiteFields}
        validation={whiteForm}
        title="ENVIANOS UN MENSAJE"
      />
      <ContactLocation />
    </div>
  );
};

export default Contact;
