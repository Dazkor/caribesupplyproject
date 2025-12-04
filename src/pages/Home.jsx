import { useState } from "react";

export default function Home() {
  const [province, setProvince] = useState("");
  const [weather, setWeather] = useState("");
  const [money, setMoney] = useState("");
  const [converted, setConverted] = useState("");

  function getWeather() {
    if (province.trim() === "") {
      setWeather("Debes escribir una provincia.");
      return;
    }
    setWeather("Clima de " + province + ": Soleado con 29°C (simulado)");
  }

  function convertMoney() {
    if (money === "" || isNaN(money)) {
      setConverted("Escribe un monto válido.");
      return;
    }
    const resultado = money * 59; // Simulado
    setConverted(money + " USD → " + resultado + " DOP (simulado)");
  }

  return (
    <div className="main-container">
      <h1>Bienvenido a CaribeSupply S.A.S.</h1>
      <p>Conectamos artesanos y productores locales con clientes nacionales e internacionales.</p>

      <div className="weather">
        <h3>Clima por provincia</h3>
        <input
          type="text"
          placeholder="Provincia"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
        <button onClick={getWeather}>Consultar</button>
        {weather && <p>{weather}</p>}
      </div>

      <div className="currency">
        <h3>Tasas de cambio</h3>
        <input
          type="number"
          placeholder="Monto en USD"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <button onClick={convertMoney}>Convertir</button>
        {converted && <p>{converted}</p>}
      </div>

      <div className="support">
        <h3>Soporte / FAQ</h3>
        <ul>
          <li>¿Cómo comprar? → Ve al catálogo y agrega productos al carrito.</li>
          <li>¿Cómo pagar? → Checkout simulado, no real.</li>
          <li>Contacto → contacto@caribesupply.com</li>
        </ul>
      </div>
    </div>
  );
}
