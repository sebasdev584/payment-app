import { string, number } from "yup";

export const INITIAL_VALUES = {
  cardNumber: "",
  titularName: "",
  Vencimiento: "",
  CVV: "",
};

export const VALIDATIONS_FORM = {
  cardNumber: string()
    .max(16, "La tarjeta debe ser de 16 dígitos")
    .min(16, "La tarjeta debe ser de 16 dígitos")
    .required("La tarjeta es requerida"),
  titularName: string()
    .min(3, "Mínimo 3 caracteres")
    .max(80, "Máximo es de 80 caracteres")
    .required("El nombre del titular es obligatorio"),
  Vencimiento: string()
    .matches(
      /^(0[1-9]|1[0-2])\/(0[0-9]|[1-9][0-9])$/,
      "Formato de fecha inválido (MM/AA)"
    )
    .required("El vencimiento es requerido"),
  CVV: string()
    .max(4, "Máximo 4 caracteres")
    .min(3, "Mínimo 3 caracteres")
    .required("El código de seguridad es requerido"),
};
