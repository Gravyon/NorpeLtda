import React from "react";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  const fields = [
    { name: "Nombre", label: "Nombre", required: true },
    { name: "Apellido", label: "Apellido", required: true },
    { name: "Tema", label: "Tema", required: true },
    { name: "Correo", label: "Correo", type: "email", required: true },
    { name: "Telefono", label: "Telefono", type: "tel", required: true },
    { name: "Mensaje", label: "Mensaje", type: "textarea", required: true },
  ];
  return (
    <div>
      <ContactForm color="white" fields={fields} title="ENVIANOS UN MENSAJE" />
    </div>
  );
};

export default Contact;
