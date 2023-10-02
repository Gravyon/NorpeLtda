import React from "react";

const ContactLocation = () => {
  return (
    <div className="">
      <p className="text-2xl mb-6">¿Donde estamos?</p>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.245027100883!2d-57.84617262550477!3d-34.47130787300198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a31268a17c5017%3A0x6eea4e5c8f049afe!2s18%20de%20Julio%20509%2C%2070000%20Col.%20del%20Sacramento%2C%20Departamento%20de%20Colonia%2C%20Uruguai!5e0!3m2!1spt-BR!2sbr!4v1695840435992!5m2!1spt-BR!2sbr"
        width="400"
        height="170"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Iframe>
    </div>
  );
};

export default ContactLocation;
