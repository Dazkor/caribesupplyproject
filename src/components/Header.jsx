import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ cart, user, setUser, darkMode, toggleDarkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <header className="header">
      <h1>CaribeSupply S.A.S.</h1>
      <button onClick={toggleDarkMode}>
  {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
</button>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catálogo</Link>
        <Link to="/cart">Carrito ({cart.length})</Link>
        {user ? (
          <>
            <span>Hola, {user.name}</span>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/login">Login / Registro</Link>
        )}
      </nav>
    </header>
  );
}
