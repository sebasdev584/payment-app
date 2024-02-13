"use client";
import { useContext, useEffect, useState } from "react";
import CartIcon from "./icons/CartIcon";
import { CartContext } from "@/app/context/CartContext";
import Link from "next/link";

const Nav = () => {
  const { cart } = useContext(CartContext);
  const [cartData, setCartData] = useState(0);

  useEffect(() => {
    setCartData(cart?.length);
  }, [cart]);

  return (
    <header className="bg-gray-300 rounded-lg">
      <nav className="flex justify-between p-2">
        <Link href="/">
          <h1 className="text-center text-black p-2">Payment App</h1>
        </Link>
        <Link href="/purchase" className="bg-black p-3 rounded-full relative">
          <CartIcon />
          <span className="absolute top-5 right-7 p-1 bg-blue-50 rounded-full text-sm font-semibold text-red-500 text-center">
            {cartData > 9 ? "+9" : cartData}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
