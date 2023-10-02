import React from "react";
import ContactForm from "../../components/ContactForm";
import { whiteForm } from "../../validations/contactSchema";
import { whiteFields } from "../../helpers/formValues";
import texto_contacto from "../../assets/texto_contacto.png";
import contactanos from "../../assets/contactanos.png";
const Contact = () => {
  return (
    <div>
      <img src={contactanos} alt="" />
      <img src={texto_contacto} alt="texto contacto" />
      <ContactForm
        color="white"
        fields={whiteFields}
        validation={whiteForm}
        title="ENVIANOS UN MENSAJE"
      />
    </div>
  );
};

export default Contact;
