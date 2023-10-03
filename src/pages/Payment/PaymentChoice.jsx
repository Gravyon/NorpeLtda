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
    <div className="flex">
      <div>
        <img className="ml-12" src={payment2} alt="Seleccion de pago" />
      </div>
      <div className="p-24">
        <p className="text-xl font-medium">SELECCIONE SU BANCO: </p>
        <div className="grid grid-cols-2">
          {banks.map((item) => (
            <img className="p-2" src={item.image} alt={item.name} srcset="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentChoice;
