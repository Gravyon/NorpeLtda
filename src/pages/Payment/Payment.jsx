import React from "react";
import texto_pago from "../../assets/texto_pago.png";
import payment from "../../assets/payment.png";
import PaymentChoice from "./PaymentChoice";

export const Payment = () => {
  return (
    <div className="grid place-items-center">
      <img src={payment} alt="Banner de pago" />
      <img src={texto_pago} alt="texto contacto" />
      <PaymentChoice />
    </div>
  );
};
