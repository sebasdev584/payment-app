import { ReactNode, useEffect, useReducer } from "react";
import { Cart } from "../lib/types";
import { CartContext } from "./CartContext";
import { cartReducer } from "./reducer";

export interface cartState {
  cart: Cart[];
}

const CART_INITIAL_STATE: cartState = {
  cart: [],
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    sessionStorage.setItem("shoppingCart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    try {
      const cartItems = sessionStorage.getItem("shoppingCart")
        ? JSON.parse(sessionStorage.getItem("shoppingCart")!)
        : [];
      dispatch({ type: "Get Cart", payload: cartItems });
    } catch (error) {
      dispatch({ type: "Get Cart", payload: [] });
    }
  }, []);

  const addCart = (payload: Cart) => {
    const exist = state.cart.some((item) => item.title === payload.title);
    if (!exist) {
      return dispatch({ type: "Add Cart", payload: [...state.cart, payload] });
    }

    const cartUpdate = state.cart.map((item) => {
      if (item.title !== payload.title) {
        return item;
      }

      if (!item.amount || !payload.amount) {
        return item;
      }

      item.amount += payload.amount;
      return item;
    });

    dispatch({ type: "Add Cart", payload: cartUpdate });
  };

  const cleanCart = () => {
    dispatch({ type: "Get Cart", payload: [] });
  };

  const deleteCart = (title: string) => {
    const exist = state.cart.some((item) => item.title === title);
    if (!exist) {
      return;
    }
    dispatch({ type: "Delete Cart", payload: { title } });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        // Methods
        addCart,
        deleteCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
