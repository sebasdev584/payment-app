"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { INITIAL_VALUES, VALIDATIONS_FORM } from "../lib/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { object } from "yup";
import usePayment from "../hooks/usePayment";
import { Payment } from "../lib/types";
import Button from "./ui/Button";

const FormComponent = () => {
  const { addPayment, payment, loading, error } = usePayment();

  const handleSubmit = (
    values: Payment,
    { resetForm }: { resetForm: () => void }
  ) => {
    addPayment(values);
    if (!error && payment !== null) {
      resetForm();
      toast.success("Pago realizado correctamente");
    }
    if (error) {
      toast.error("Error al realizar el pago");
      return;
    }
  };

  return (
    <>
      <ToastContainer autoClose={5000} />
      {!loading && (
        <Formik
          enableReinitialize={true}
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={object(VALIDATIONS_FORM)}
        >
          {({ isSubmitting, touched }) => (
            <Form className="flex flex-col lg:w-96 md:w-20 gap-y-2">
              <label>
                <span className="text-sm">Número de tarjeta</span>
                <Field
                  type="number"
                  name="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  className="outline-none p-3 border-4 border-gray-500 rounded-lg w-full focus:border-4 focus:border-blue-300 hover:appearance-none"
                />
              </label>
              {touched.cardNumber && (
                <ErrorMessage
                  name="cardNumber"
                  component="div"
                  className="text-xs text-red-500"
                />
              )}
              <label>
                <span className="text-sm">Nombre del titular</span>
                <Field
                  type="text"
                  name="titularName"
                  placeholder="Ej. Andrés Parra"
                  className="outline-none p-3 border-4 border-gray-500 rounded-lg w-full focus:border-4 focus:border-blue-300"
                  maxLength="80"
                />
              </label>
              {touched.titularName && (
                <ErrorMessage
                  name="titularName"
                  component="div"
                  className="text-sm text-red-500"
                />
              )}
              <label>
                <span className="text-sm">Vencimiento</span>
                <Field
                  type="text"
                  name="Vencimiento"
                  placeholder="MM/AA"
                  className="outline-none p-3 border-4 border-gray-500 rounded-lg w-full focus:border-4 focus:border-blue-300"
                  maxLength="5"
                />
              </label>
              {touched.Vencimiento && (
                <ErrorMessage
                  name="Vencimiento"
                  component="div"
                  className="text-sm text-red-500"
                />
              )}
              <label>
                <span className="text-sm">Código de seguridad</span>
                <Field
                  type="number"
                  name="CVV"
                  placeholder="123"
                  className="outline-none p-3 border-4 border-gray-500 rounded-lg w-full focus:border-4 focus:border-blue-300 appearance-none"
                  maxLength="4"
                />
              </label>
              {touched.CVV && (
                <ErrorMessage
                  name="CVV"
                  component="div"
                  className="text-sm text-red-500"
                />
              )}
              <Button
                className="p-3 min-w-24 uppercase font-medium rounded-md shadow bg-green-400 hover:bg-green-700 ease-linear transition-all duration-150 disabled:bg-gray-400"
                disabled={isSubmitting}
                type="submit"
              >
                Pagar
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default FormComponent;
