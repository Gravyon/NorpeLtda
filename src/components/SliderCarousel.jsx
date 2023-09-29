import { Carousel, IconButton, Button } from "@material-tailwind/react";
import banner1 from "../assets/Banner01.png";
import banner2 from "../assets/Banner02.png";
import banner3 from "../assets/Banner03.png";
import banner4 from "../assets/Banner04.png";
import banner5 from "../assets/Banner05.png";
export function SliderCarousel() {
  return (
    <Carousel
      loop
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          // color="green"
          size="lg"
          onClick={handlePrev}
          className="!absolute text-white rounded-3xl bg-norpe-green hover:bg-aquamarine top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          // color="green"
          size="lg"
          onClick={handleNext}
          className="!absolute text-white rounded-3xl bg-norpe-green hover:bg-aquamarine top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="relative h-full w-full">
        <img
          src={banner1}
          alt="Imagen 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center md:place-items-end md:py-24 md:px-24 lg:py-64 lg:px-56 mb-20">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 lg:pb-32"></div>
          <div className="flex justify-center gap-2">
            <Button
              size="lg"
              className="bg-norpe-green hover:bg-aquamarine rounded-3xl"
              variant="filled"
            >
              SOLICITAR COTIZACION
            </Button>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={banner2}
          alt="Imagen 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 lg:pb-32"></div>
          <div className="flex justify-center gap-2">
            <a href="#monitoreo">
              <Button
                size="lg"
                className="bg-norpe-green hover:bg-aquamarine rounded-3xl"
                variant="filled"
              >
                MONITOREO Y RESPUESTA
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={banner3}
          alt="Imagen 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 lg:pb-32"></div>
          <div className="flex justify-center gap-2">
            <a href="#alarmas">
              <Button
                size="lg"
                className="bg-norpe-green hover:bg-aquamarine rounded-3xl"
                variant="filled"
              >
                ALARMA DE ROBO
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={banner4}
          alt="Imagen 4"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 lg:pb-32"></div>
          <div className="flex justify-center gap-2">
            <a href="#cctv">
              <Button
                size="lg"
                className="bg-norpe-green hover:bg-aquamarine rounded-3xl"
                variant="filled"
              >
                SISTEMA DE CCTV
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={banner5}
          alt="Imagen 5"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 lg:pb-32"></div>
          <div className="flex justify-center gap-2">
            <a href="#deteccion">
              <Button
                size="lg"
                className="bg-norpe-green hover:bg-aquamarine rounded-3xl"
                variant="filled"
              >
                DETECCION DE INCENDIOS
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
