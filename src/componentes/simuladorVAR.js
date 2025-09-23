import React, { useState } from "react";

const SimuladorVaR = () => {
  const [precios, setPrecios] = useState("");
  const [confianza, setConfianza] = useState(95);
  const [horizonte, setHorizonte] = useState(1);
  const [inversion, setInversion] = useState(1000);
  const [resultado, setResultado] = useState(null);

  const calcularVaR = () => {
    // Convertir string de precios en array de números
    const preciosArray = precios
      .split(",")
      .map((p) => parseFloat(p.trim()))
      .filter((p) => !isNaN(p));

    if (preciosArray.length < 2) {
      alert("⚠️ Debes ingresar al menos 2 precios para calcular rendimientos.");
      return;
    }

    // Calcular rendimientos diarios
    const rendimientos = [];
    for (let i = 1; i < preciosArray.length; i++) {
      const r = (preciosArray[i] - preciosArray[i - 1]) / preciosArray[i - 1];
      rendimientos.push(r);
    }

    // Ordenar rendimientos de menor a mayor
    const ordenados = [...rendimientos].sort((a, b) => a - b);

    // Percentil según nivel de confianza
    const alpha = 1 - confianza / 100; // ej: 95% → 0.05
    const index = Math.floor(alpha * ordenados.length);
    const varDiario = ordenados[index]; // peor pérdida esperada

    // Ajuste por horizonte temporal (√t)
    const varHorizonte = varDiario * Math.sqrt(horizonte);

    // En monto monetario
    const varMonetario = inversion * varHorizonte;

    setResultado({
      varDiario: (varDiario * 100).toFixed(2),
      varHorizonte: (varHorizonte * 100).toFixed(2),
      varMonetario: varMonetario.toFixed(2),
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        📉 Simulador de VaR Histórico
      </h2>

      {/* Input de precios */}
      <div className="mb-4">
        <label className="block font-medium mb-2">
          Precios históricos (separados por comas)
        </label>
        <input
          type="text"
          value={precios}
          onChange={(e) => setPrecios(e.target.value)}
          placeholder="Ej: 100, 102, 101, 104, 103"
          className="w-full border p-2 rounded-lg"
        />
      </div>

      {/* Nivel de confianza */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Nivel de confianza (%)</label>
        <select
          value={confianza}
          onChange={(e) => setConfianza(parseInt(e.target.value))}
          className="w-full border p-2 rounded-lg"
        >
          <option value={90}>90%</option>
          <option value={95}>95%</option>
          <option value={99}>99%</option>
        </select>
      </div>

      {/* Horizonte temporal */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Horizonte temporal (días)</label>
        <input
          type="number"
          min="1"
          value={horizonte}
          onChange={(e) => setHorizonte(parseInt(e.target.value))}
          className="w-full border p-2 rounded-lg"
        />
      </div>

      {/* Monto invertido */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Monto invertido ($)</label>
        <input
          type="number"
          min="1"
          value={inversion}
          onChange={(e) => setInversion(parseFloat(e.target.value))}
          className="w-full border p-2 rounded-lg"
        />
      </div>

      {/* Botón calcular */}
      <button
        onClick={calcularVaR}
        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Calcular VaR
      </button>

      {/* Resultados */}
      {resultado && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg font-bold mb-2">📊 Resultados</h3>
          <p>VaR diario ({confianza}%): <span className="font-semibold">{resultado.varDiario}%</span></p>
          <p>VaR a {horizonte} días: <span className="font-semibold">{resultado.varHorizonte}%</span></p>
          <p>Pérdida máxima esperada en monto: <span className="font-semibold">${resultado.varMonetario}</span></p>
          <p className="mt-2 text-sm text-gray-600 italic">
            👉 El VaR indica la pérdida máxima esperada con {confianza}% de confianza en un horizonte de {horizonte} día(s).
          </p>
        </div>
      )}
    </div>
  );
};

export default SimuladorVaR;