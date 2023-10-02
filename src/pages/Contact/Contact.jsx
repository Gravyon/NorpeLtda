import React from "react";
import ContactForm from "../../components/ContactForm";
import { whiteForm } from "../../validations/contactSchema";

const Contact = () => {
  const fields = [
    { name: "fname", label: "Nombre:*", textarea: false },
    { name: "lname", label: "Apellido:*", textarea: false },
    { name: "topic", label: "Tema:*", textarea: false },
    { name: "email", label: "Correo:*", type: "email", textarea: false },
    { name: "phone", label: "Telefono", type: "tel", textarea: false },
    { name: "message", label: "Mensaje:*", type: "textarea", textarea: true },
  ];
  return (
    <div>
      <ContactForm
        color="white"
        fields={fields}
        validation={whiteForm}
        title="ENVIANOS UN MENSAJE"
      />
    </div>
  );
};

export default Contact;
