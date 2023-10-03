import React from "react";
import tips_banner from "../../assets/tips_banner.png";
import texto_tips from "../../assets/texto_tips.png";

export const Tips = () => {
  return (
    <div>
      <img src={tips_banner} alt="Banner de tips" />
      <img src={texto_tips} alt="Texto tips" />
    </div>
  );
};
