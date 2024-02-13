import { Cart } from "../lib/types";
import { cartState } from "./CartProvider";

type CartActionsType =
  | { type: "Add Cart"; payload: Cart[] }
  | { type: "Get Cart"; payload: Cart[] }
  | { type: "Delete Cart"; payload: Cart };

export const cartReducer = (
  state: cartState,
  action: CartActionsType
): cartState => {
  switch (action.type) {
    case "Get Cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "Add Cart":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "Delete Cart":
      return {
        ...state,
        cart: state.cart.filter((item) => item.title !== action.payload.title),
      };

    default:
      return state;
  }
};
