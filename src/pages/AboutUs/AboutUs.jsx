import React from "react";
import quienes from "../../assets/BannerQuienesSomos.png" // Banner 
import conoce from "../../assets/conoce.png"

export const AboutUs = () => {
  return (
    <>
      <div className="grid place-items-center">
        <img src={quienes} alt="Quienes somos?"/>
        <img src={conoce} alt ="Conoce mas acerca de nosotros"/>
      </div>
      
      <div className="md:flex" //Pegado
      style={{backgroundColor: "#EFEFEF"}}>

        {/*  xl:m-32 */}
        <div className="grid place-items-left m-4 sm:m-8 md:m-12 lg:m-24">
          <p className="text-justify"><b>Seguridad Norpe</b> nace como una empresa familiar el 1º de julio de 1996, dedicada a brindar vigilancia y seguridad física en el Departamento de Colonia. El devenir del tiempo y la imposición de los avances tecnológicos nos transformó en la pionera en sistemas electrónicos de seguridad en el Departamento de Colonia (Uruguay).</p>
          <br />

          <p className="text-justify">Hoy somos la empresa que lidera este mercado territorial en el rubro seguridad electrónica. Hemos crecido paso a paso, con confianza y responsabilidad, adelantándonos a las necesidades de nuestros clientes potenciales y actuales incorporando tecnología y mejora continua en la calidad de nuestros servicios.</p>
          <br />

          <p className="text-justify">Hoy podemos decir con orgullo que nuestros clientes son nuestros amigos, a quienes brindamos una atención personalizada, realizando propuestas acordes a las necesidades de cada uno: nuestros clientes son la razón de nuestra existencia y por tanto nos compete brindarle la mayor seguridad y tranquilidad.</p>
          <br />

          <p className="text-justify">Contamos con un plantel de personal comprometido con los objetivos de la empresa, lo que implica un crecimiento sostenido en la calidad de prestación de los servicios.</p>
          <p className="text-justify">Nunca descansamos, <b>estamos trabajando para usted las 24 horas del día los 365 días del año</b>: nuestro desvelo es su mejor descanso.</p>
          <br />

          <p><b>
            Dentro de nuestros servicios ofrecemos:
          </b></p>
          <ul style={{ listStyle: "initial", paddingLeft: "35px" }}>
            <li>Instalación de alarmas para hogares, negocios, oficinas y empresas</li>
            <li>Monitoreo de sistemas electrónicos de seguridad</li>
            <li>Monitoreo antisabotaje</li>
            <li>Respuesta a eventos reportados haciéndose presente en el lugar, verificando el hecho en apoyo a las fuerzas de seguridad competentes.</li>
            <li>Servicio técnico capacitado en instalación y reparación de sistemas electrónicos de seguridad</li>
            <li>Instalación y mantenimiento de sistemas de detección de incendio</li>
            <li>Instalación de sistemas de videovigilancia.</li>
          </ul>
        </div>
      </div>
    </>
  )
};
