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
      {
        path: "/tips",
        element: <Tips />,
      },
      {
        path: "/factura",
        element: <Payment />,
      },
      {
        path: "/nosotros",
        element: <AboutUs />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);
