"use client";

import { ReactNode, useState } from "react";
import Button from "./Button";

export default function Modal({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        onClick={() => setShowModal(true)}
        className="p-2 mt-2 mb-2 font-medium rounded-md bg-green-400 hover:bg-green-700 ease-linear transition-all duration-150"
      >
        <em>Pagar con tarjeta de crédito</em>
      </Button>
      {showModal ? (
        <>
          <div className="justify-center items-center lg:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold text-center">
                    <p>Datos Tarjeta de crédito</p>
                  </h3>
                  <Button
                    className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl opacity-5 block outline-none focus:outline-none hover:opacity-100">
                      ×
                    </span>
                  </Button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="lg:flex lg:gap-x-10 text-blueGray-500 text-md leading-relaxed text-black">
                    {children}
                  </div>
                </div>
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    className="text-red-500 background-transparent font-bold uppercase p-2 text-sm outline-none focus:outline-none hover:bg-red-500 hover:text-white hover:rounded-md mr-1 mb-1 transition-all ease-linear"
                    onClick={() => setShowModal(false)}
                  >
                    {" "}
                    Cancelar
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
