import React from "react";
import Cart from "../components/Cart";

export default function CartPage({ cart, setCart }) {
  return (
    <div>
      <h2>Tu Carrito</h2>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}
