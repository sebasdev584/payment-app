export type Payment = {
  cardNumber: string;
  titularName: string;
  Vencimiento: string;
  CVV: string;
  status?: string;
};

export type Cart = {
  title: string;
  amount?: number;
};
