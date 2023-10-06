import React from "react";
import error_404 from "../assets/error_404.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const NotFound = () => {
  return (
    <div className="grid place-items-center">
      <img src={error_404} className="md:w-1/2" alt="No encontrado" />
      <p className="text-3xl">Página no encontrada</p>
      <Link to="/">
        <Button
          size="lg"
          className="bg-norpe-green hover:bg-aquamarine rounded-3xl m-2"
        >
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
