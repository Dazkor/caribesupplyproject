import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, cart, setCart }) {
  const [filter, setFilter] = useState("");

  const filtered = filter
    ? products.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()))
    : products;

  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por categoría..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="product-list">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}
