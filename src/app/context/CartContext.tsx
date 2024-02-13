import { createContext } from "react";
import { Cart } from "../lib/types";

export interface ContextProps {
  cart: Cart[];

  // Methods
  addCart: (cart: Cart) => void;
  deleteCart: (title: string) => void;
}

export const CartContext = createContext({} as ContextProps);
