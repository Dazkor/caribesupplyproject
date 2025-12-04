import React from "react";

export default function ProductCard({ product, cart, setCart }) {
  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>RD$ {product.price}</p>
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}
