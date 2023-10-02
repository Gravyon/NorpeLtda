import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const whiteForm = Yup.object().shape({
  fname: Yup.string("Debes ingresar un nombre")
    .max(50, "Muy largo")
    .min(2, "Muy corto")
    .required("Nombre es requerido"),
  lname: Yup.string()
    .required("Debes ingresar un apellido")
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no debe superar los 50 caracteres"),
  email: Yup.string("Ingresa tu correo")
    .email("El correo debe ser valido")
    .required("Correo requerido"),
  message: Yup.string()
    .min(2, "Muy corto")
    .max(500, "Muy largo")
    .required("Dejanos un mensaje"),
  topic: Yup.string()
    .min(2, "Muy corto")
    .max(50, "Muy largo")
    .required("Tema requerido"),
  phone: Yup.string().matches(phoneRegExp, "El telefono debe ser valido"),
});

export const greenForm = Yup.object().shape({
  fname: Yup.string("Tu nombre completo")
    .max(50, "Muy largo")
    .min(2, "Muy corto")
    .required("Nombre es requerido"),
  email: Yup.string("Ingresa tu correo")
    .email("El correo debe ser valido")
    .required("Correo requerido"),
  message: Yup.string()
    .min(2, "Muy corto")
    .max(500, "Muy largo")
    .required("Dejanos un mensaje"),
  phone: Yup.string().matches(phoneRegExp, "El telefono debe ser valido"),
});
