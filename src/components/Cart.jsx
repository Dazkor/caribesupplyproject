import React from "react";

export default function Cart({ cart, setCart }) {
  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((a, b) => a + b.price, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - RD$ {item.price}</p>
              <button onClick={() => removeItem(index)}>Eliminar</button>
            </div>
          ))}
          <p>Subtotal: RD$ {subtotal.toFixed(2)}</p>
          <p>Impuestos: RD$ {tax.toFixed(2)}</p>
          <p>Total: RD$ {total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
