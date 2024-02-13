"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartContext, ContextProps } from "../context/CartContext";

const PurchaseDetail = ({ flag }: { flag: boolean }) => {
  const { cart, deleteCart } = useContext<ContextProps>(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleDelete = (title: string) => {
    if (confirm(`Seguro que desea eliminar el producto ${title}`)) {
      deleteCart(title);
    }
  };

  useEffect(() => {
    const totalAmount = cart.reduce((total, cart) => total + cart.amount!, 0);
    setTotalAmount(totalAmount);
  }, [cart]);

  return (
    <div className="flex sm:mt-10 lg:mt-0 flex-col lg:min-w-96 sm:w.20 rounded-md shadow-md p-3 gap-y-4 max-h-96 overflow-y-auto">
      {cart.length ? (
        <>
          <span className="font-semibold">Detalle de tu compra</span>
          <span>
            <div className="flex flex-col gap-y-3">
              {cart.map(({ title, amount }) => (
                <div key={title} className="flex justify-between p-1">
                  <span className="max-w-48">{title}: </span>
                  <span>
                    {amount}{" "}
                    {flag && (
                      <span
                        className="p-1 bg-orange-500 rounded-full font-semibold text-sm cursor-pointer"
                        title={`Eliminar el producto: ${title}`}
                        onClick={() => handleDelete(title)}
                      >
                        x
                      </span>
                    )}
                  </span>
                </div>
              ))}
              <div className="flex justify-between p-1 bg-green-300 rounded-sm shadow-md">
                <p>Total a pagar: </p>
                <span className="font-semibold text-md">{totalAmount}</span>
              </div>
            </div>
          </span>
        </>
      ) : (
        <span className="font-semibold mt-2">Carrito vacío</span>
      )}
    </div>
  );
};

export default PurchaseDetail;
