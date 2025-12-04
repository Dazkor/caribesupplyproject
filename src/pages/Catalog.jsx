import React from "react";
import ProductList from "../components/ProductList";
import products from "../data/product";

export default function Catalog({ cart, setCart }) {
  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <ProductList products={products} cart={cart} setCart={setCart} />
    </div>
  );
}
