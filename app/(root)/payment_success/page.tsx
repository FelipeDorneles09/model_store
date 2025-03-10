"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import React, { useEffect } from "react";

const SuccessfullPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 ">
      <p className="text-heading4-bold text-blue-500">
        Pagamento Efetuado com Sucesso
      </p>
      <p>Obrigado pela Compra</p>
      <Link
        href="/"
        className="p-4 border text-base-bold hover:bg-black hover:text-white"
      >
        CONTINUAR COMPRANDO
      </Link>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default SuccessfullPayment;
