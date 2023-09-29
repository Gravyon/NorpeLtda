import React from "react";
import { SliderCarousel } from "../../components/SliderCarousel";
import Servicios from "../../components/Servicios";
import HelpSection from "../../components/HelpSection";

const Home = () => {
  return (
    <div>
      <SliderCarousel />
      <Servicios />
      <HelpSection />
    </div>
  );
};

export default Home;
