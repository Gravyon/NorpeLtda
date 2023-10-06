import React, { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@material-tailwind/react";
import { toast } from "sonner";
const ContactForm = ({ color, fields, title, validation }) => {
  const [submitting, setSubmitting] = useState(false);
  const [state, handleSubmit] = useForm(import.meta.env.VITE_CONTACT);
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    "Alarmas de robo",
    "Deteccion de incendios",
    "Sistemas de CCTV",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (values, reset) => {
    try {
      setSubmitting(true);
      await handleSubmit(values);
      toast.success("Envío correcto");
    } catch (error) {
      toast.error("Error en el envío");
    } finally {
      reset.resetForm({ fields });
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`py-12 px-32 ${
        color === "green" ? "bg-norpe-green" : "bg-gray-100"
      } `}
    >
      <div className="grid place-items-center">
        <p
          className={`text-3xl font-bold  ${
            color === "green" ? "text-white" : "text-norpe-green pb-10"
          }`}
        >
          {title}
        </p>
        {color === "green" ? (
          <div className="flex">
            {services.map((service, index) => (
              <p
                // key={index}
                className={`text-lime absolute text-xl font-bold ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500`}
              >
                {service}
              </p>
            ))}
          </div>
        ) : null}
      </div>
      <Formik
        initialValues={{}}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="grid grid-rows-2 md:mx-24 m-10">
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label
                  htmlFor={field.name}
                  className={`${color === "green" ? "text-white" : ""}`}
                >
                  {field.label}
                </label>
                {!field.textarea ? (
                  <Field
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    className={`block w-full p-2 border rounded-md bg-white`}
                  />
                ) : (
                  <Field
                    type="text"
                    component="textarea"
                    name="message"
                    rows="4"
                    className="block w-full p-2 rounded-md bg-white"
                  />
                )}
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
            ))}
            <Button
              disabled={submitting}
              size="lg"
              type="submit"
              className={`bg-norpe-green place-self-end ${
                color === "green" ? "outline outline-1 outline-white" : ""
              } text-white px-4 py-2 rounded-3xl hover:bg-aquamarine`}
            >
              Enviar
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
