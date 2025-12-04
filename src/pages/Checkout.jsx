import React from "react";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout({ cart, setCart }) {
  return (
    <div>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío. Agrega productos antes de continuar.</p>
      ) : (
        <CheckoutForm cart={cart} setCart={setCart} />
      )}
    </div>
  );
}
