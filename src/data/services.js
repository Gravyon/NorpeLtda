import monitoreo from "../assets/01Monitoreo_y_respuesta.png";
import alarmas from "../assets/02Alarmas_de_Robo.png";
import deteccion from "../assets/03Deteccion_de_Incendios.png";
import cctv from "../assets/04SistemasCCTV.png";
export const sections = [
  {
    id: "monitoreo",
    title: "MONITOREO Y RESPUESTA",
    description:
      "El sistema de alarmas enviará señales a nuestro centro de monitoreo con toda la actividad del sistema. Ante eventos de emergencia, uno de nuestros móviles concurrirá al lugar.",
    imageSrc: monitoreo,
  },
  {
    id: "alarmas",
    title: "ALARMAS DE ROBO",
    description:
      "El sistema dará aviso ante cualquier incidente o posible intrusión de su casa o negocio.",
    imageSrc: alarmas,
  },
  {
    id: "deteccion",
    title: "DETECCIÓN DE INCENDIOS",
    description:
      "El sistema emite una alerta ante la existencia de fenómenos inherentes al fuego. Todas las instalaciones se realizan acorde a la normativa vigente y con elementos homologados por la DNB.",
    imageSrc: deteccion,
  },
  {
    id: "cctv",
    title: "SISTEMAS DE CCTV",
    description:
      "Proporciona vigilancia continúa y grabación de cámaras de seguridad implementando las últimas tecnologías en la materia.",
    imageSrc: cctv,
  },
];
