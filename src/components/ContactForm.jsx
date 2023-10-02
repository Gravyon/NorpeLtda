import React from "react";
import { useForm } from "@formspree/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@material-tailwind/react";
import { toast } from "sonner";
import { useState } from "react";
const ContactForm = ({ color, fields, title, validation }) => {
  const [submitting, setSubmitting] = useState(false);
  const [state, handleSubmit] = useForm(import.meta.env.VITE_CONTACT);
  const onSubmit = async (values, { resetForm }) => {
    setSubmitting(true);
    try {
      await handleSubmit(values);
      toast.success("Envío correcto");
    } catch (error) {
      toast.error("Error en el envío");
    } finally {
      resetForm();
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`py-12 px-32 ${
        color === "green" ? "bg-norpe-green" : "bg-gray-100"
      } `}
    >
      <p
        className={`flex justify-center text-3xl pb-10 font-bold  ${
          color === "green" ? "text-white" : "text-norpe-green"
        }`}
      >
        {title}
      </p>
      <Formik
        initialValues={{}}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="grid grid-rows-2 mx-24">
            {fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label
                  htmlFor={field.name}
                  className={`${
                    color === "green" ? "text-white" : "text-norpe-green"
                  }`}
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
