import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = ({ color, fields, title }) => {
  return (
    <div className={`p-4 ${color === "green" ? "bg-norpe-green" : "bg-white"}`}>
      <h2
        className={`text-xl font-semibold ${
          color === "green" ? "text-white" : "text-norpe-green"
        }`}
      >
        {title}
      </h2>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {
          // Handle form submission logic here
          console.log("Form data submitted:", values);
        }}
        validate={(values) => {
          // Add your validation logic here
          const errors = {};
          // Example: Validate required fields
          fields.forEach((field) => {
            if (field.required && !values[field.name]) {
              errors[field.name] = `${field.label} is required`;
            }
          });
          return errors;
        }}
      >
        <Form>
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
              <Field
                type={field.type || "text"}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder || ""}
                className={`w-full px-3 py-2 border rounded-md bg-white`}
              />
              <ErrorMessage
                name={field.name}
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
          ))}
          <button
            type="submit"
            className={`bg-${color}-500 text-white px-4 py-2 rounded-md hover:bg-${color}-600`}
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
