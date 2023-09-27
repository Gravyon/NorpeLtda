import { createBrowserRouter } from "react-router-dom";
import Default from "../layout/Default";
import { Payment } from "../pages/Payment/Payment";
import { Tips } from "../pages/Tips/Tips";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/tips",
    element: <Default />,
    children: [
      {
        path: "",
        element: <Tips />,
      },
    ],
  },
  {
    path: "/factura",
    element: <Default />,
    children: [
      {
        path: "",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/nosotros",
    element: <Default />,
    children: [
      {
        path: "",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/contacto",
    element: <Default />,
    children: [
      {
        path: "",
        element: <Contact />,
      },
    ],
  },
  //   {
  //     path: "*",
  //     element: <NotFoundView />,
  //   },
]);
