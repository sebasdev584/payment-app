"use client";

import { useContext } from "react";
import Button from "./ui/Button";
import { CartContext } from "../context/CartContext";

type Props = {
  imgSrc: string;
  alt: string;
  title: string;
  price: number;
};

export default function Card({ imgSrc, alt, price, title }: Props) {
  const { addCart } = useContext(CartContext);

  const addToCart = (title: string, price: number) => {
    addCart({
      title,
      amount: price,
    });
  };

  return (
    <div className="p-5 max-h-[287rem] max-w-96 m-2 bg-gray-200 rounded-sm">
      <article>
        <img src={imgSrc} alt={alt} className="rounded-lg object-cover" />
      </article>
      <footer className="flex flex-col justify-center items-center mt-2">
        <div className="flex flex-col justify-center items-center font-semibold text-sm">
          <p className="max-h-10 min-w-[200px] text-center text-ellipsis overflow-hidden whitespace-nowrap">
            {title}
          </p>
          <p>${price} Cop</p>
        </div>
        <Button
          onClick={() => addToCart(title, price)}
          className="p-2 mt-2 font-medium rounded-md bg-green-400 hover:bg-green-700 ease-linear transition-all duration-150"
        >
          Comprar
        </Button>
      </footer>
    </div>
  );
}
