import React from "react";
import logo from "../assets/Logo_Head.png";
import { BiLogoFacebook } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import "./styles.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navigation = [
    { name: "INICIO", href: "/" },
    { name: "TIPS PARA EL USUARIO", href: "/tips" },
    { name: "PAGUE SU FACTURA", href: "/factura" },
    { name: "¿QUIENES SOMOS?", href: "/nosotros" },
    { name: "CONTÁCTANOS", href: "/contacto" },
  ];

  const contact = [
    {
      name: "facebook",
      icon: <BiLogoFacebook />,
      value: "",
      href: "www.facebook.com/norpe",
    },
    {
      name: "telephone",
      icon: <LuPhone />,
      value: "+59845224413",
      href: "tel:+59845224413",
    },
    {
      name: "mail",
      icon: <AiOutlineMail />,
      value: "info@seguridadnorpe.com.uy",
      href: "mailto:info@seguridadnorpe.com.uy",
    },
  ];
  return (
    <nav className="mx-24 bg-logo bg-no-repeat bg-left-bottom">
      <div className="flex justify-end text-gray-300 text-xl">
        {contact.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            className="bg-norpe-green hover:text-aquamarine nav-border text-white px-1 py-2 text-sm font-medium"
          >
            <div className="flex nav-item p-2">
              <p className="text-xl mr-1">{item.icon}</p>
              <p>{item.value}</p>
            </div>
          </a>
        ))}
      </div>
      {/* <img src={logo} /> */}
      <div className="flex justify-end mt-5">
        {navigation.map((item) => (
          <p className="nav-item hover:text-aquamarine hover:underline-offset-4">
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-norpe-green active-nav-link bg-white px-3 py-2 text-sm font-medium"
                  : "text-norpe-green nav-link bg-white px-3 py-2 text-sm font-medium"
              }
            >
              {item.name}
            </NavLink>
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
