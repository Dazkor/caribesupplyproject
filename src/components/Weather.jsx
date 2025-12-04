import React, { useState } from "react";

export default function Weather() {
  const [province, setProvince] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = () => {
    const temp = Math.floor(Math.random() * 30) + 20;
    setWeather(`El clima en ${province} es ${temp}°C`);
  };

  return (
    <div className="weather">
      <h3>Clima por provincia</h3>
      <input placeholder="Provincia" value={province} onChange={(e) => setProvince(e.target.value)} />
      <button onClick={fetchWeather}>Consultar</button>
      {weather && <p>{weather}</p>}
    </div>
  );
}
