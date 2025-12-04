import React, { useState } from "react";

export default function LoginRegister({ user, setUser }) {
  const [mode, setMode] = useState("login"); // login o register
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => 
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "register") {
      // Registro requiere nombre + correo
      if (!form.name || !form.email) {
        alert("Completa nombre y correo.");
        return;
      }
      setUser({ name: form.name, email: form.email });
      alert(`Registrado correctamente: ${form.name}`);
    }

    if (mode === "login") {
      // Login solo requiere correo
      if (!form.email) {
        alert("Ingresa tu correo.");
        return;
      }
      setUser({ name: "Usuario", email: form.email });
      alert("Login exitoso");
    }
  };

  return (
    <div className="login-register">
      <button onClick={() => setMode("login")}>Login</button>
      <button onClick={() => setMode("register")}>Registro</button>

      <form onSubmit={handleSubmit}>
        
        {mode === "register" && (
          <input
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            required={mode === "register"}
          />
        )}

        <input
          name="email"
          type="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {mode === "login" ? "Entrar" : "Registrar"}
        </button>
      </form>
    </div>
  );
}
