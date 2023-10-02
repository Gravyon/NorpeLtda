import React from "react";
import ContactForm from "../../components/ContactForm";
import { whiteForm } from "../../validations/contactSchema";
import { whiteFields } from "../../helpers/formValues";

const Contact = () => {
  return (
    <div>
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
