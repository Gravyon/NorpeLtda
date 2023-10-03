import React from "react";
import bbva from "../../assets/bbva.png";
import santander from "../../assets/santander.png";
import bundes from "../../assets/bundes.png";
import scotiabank from "../../assets/scotiabank.png";
import republica from "../../assets/republica.png";
import payment2 from "../../assets/payment2.png";

const PaymentChoice = () => {
  const banks = [
    { name: "republica", image: republica },
    { name: "scotiabank", image: scotiabank },
    { name: "bundes", image: bundes },
    { name: "santander", image: santander },
    { name: "bbva", image: bbva },
  ];
  return (
    <div className="md:flex">
      <div className="flex justify-center">
        <img className="md:ml-12" src={payment2} alt="Seleccion de pago" />
      </div>
      <div className="p-10 md:p-24">
        <p className="hidden md:block text-xl md:mb-6 md:ml-8 text-center md:text-start font-medium">
          SELECCIONE SU BANCO:{" "}
        </p>
        <div className="md:grid md:grid-cols-2">
          <p className="md:hidden text-xl text-center md:text-start font-medium">
            SELECCIONE SU BANCO:{" "}
          </p>
          {banks.map((item) => (
            <button className="p-2 md:px-8 md:p-4">
              <img src={item.image} alt={item.name} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentChoice;
