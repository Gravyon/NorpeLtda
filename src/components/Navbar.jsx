import React from "react";
import logo from "../assets/Logo_Head.png";
import { BiLogoFacebook } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import "./styles.css";
const Navbar = () => {
  const navigation = [
    { name: "INICIO", href: "#aboutme", current: true },
    { name: "TIPS PARA EL USUARIO", href: "#projects", current: false },
    { name: "PAGUE SU FACTURA", href: "#contact", current: false },
    { name: "QUIENES SOMOS?", href: "#contact", current: false },
    { name: "CONTACTANOS", href: "#contact", current: false },
  ];

  const contact = [
    {
      name: "facebook",
      icon: <BiLogoFacebook />,
      value: "",
      href: "www.facebook.com/norpe",
      current: false,
    },
    {
      name: "telephone",
      icon: <LuPhone />,
      value: "+59845224413",
      href: "tel:+59845224413",
      current: false,
    },
    {
      name: "mail",
      icon: <AiOutlineMail />,
      value: "info@seguridadnorpe.com.uy",
      href: "mailto:info@seguridadnorpe.com.uy",
      current: false,
    },
  ];
  return (
    <nav className="mx-24">
      <div className="flex justify-end text-gray-300 text-xl">
        {contact.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            className="bg-norpe-green hover:text-blue nav-border text-white px-1 py-2 text-sm font-medium"
            aria-current={
              item.current ? "underline hover:underline" : undefined
            }
          >
            <div className="flex nav-item p-2">
              <p className="text-xl mr-1">{item.icon}</p>
              <p>{item.value}</p>
            </div>
          </a>
        ))}
      </div>
      <img src={logo} className="m-2" />
      <div className="flex justify-end  ">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-norpe-green bg-white px-3 py-2 text-sm font-medium"
          >
            <p className="nav-item nav-link hover:text-green-500 hover:underline-offset-4">
              {item.name}
            </p>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
