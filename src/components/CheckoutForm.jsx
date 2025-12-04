import React, { useState } from "react";

export default function CheckoutForm({ cart, setCart }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    province: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.address || !form.province) {
      alert("Por favor completa todos los campos.");
      return;
    }
    alert("Compra realizada con éxito!");
    setCart([]);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Correo" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} required />
      <input name="address" placeholder="Dirección" value={form.address} onChange={handleChange} required />
      <input name="province" placeholder="Provincia" value={form.province} onChange={handleChange} required />
      <button type="submit">Finalizar compra</button>
    </form>
  );
}
