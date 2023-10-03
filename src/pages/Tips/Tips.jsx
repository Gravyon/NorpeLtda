import React from "react";
import tips_banner from "../../assets/tips_banner.png";
import texto_tips from "../../assets/texto_tips.png";
import VideoSection from "./VideoSection";

export const Tips = () => {
  return (
    <div className="grid place-items-center">
      <img src={tips_banner} alt="Banner de tips" />
      <img src={texto_tips} alt="Texto tips" />
      <VideoSection />
    </div>
  );
};
