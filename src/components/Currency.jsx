import React, { useState } from "react";

export default function Currency() {
  const [usd, setUsd] = useState("");
  const [rate] = useState(55.5); // Simulado

  return (
    <div className="currency">
      <h3>Tasas de cambio</h3>
      <input placeholder="Monto en USD" value={usd} onChange={(e) => setUsd(e.target.value)} />
      {usd && <p>{usd} USD ≈ RD$ {(usd * rate).toFixed(2)}</p>}
    </div>
  );
}
