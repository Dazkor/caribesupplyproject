import React from "react";
import LoginRegister from "../components/LoginRegister";

export default function Login({ user, setUser }) {
  if (user) {
    return <p>Ya has iniciado sesión como {user.name}</p>;
  }

  return (
    <div>
      <h2>Login / Registro</h2>
      <LoginRegister user={user} setUser={setUser} />
    </div>
  );
}
