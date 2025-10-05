import React, { useState } from "react";
import fetchPrices from "../../services/financeApi";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Simulador = () => {
    const [ticker, setTicker] = useState("");
    const [prices, setPrices] = useState([]);
    const [inversion, setInversion] = useState("");
    const [horizonte, setHorizonte] = useState(5);   // nuevo
    const [confianza, setConfianza] = useState(95);  // nuevo
    const [varResult, setVarResult] = useState(null);

    const handleBuscar = async () => {
        if (!ticker) return;
        try {
            const data = await fetchPrices(ticker);
            setPrices(data);
        } catch (err) {
            console.error("Error al obtener precios:", err);
        }
    };

    const handleCalcularVaR = () => {
        if (prices.length < 2) {
            alert("Necesitas al menos 2 precios para calcular rendimientos");
            return;
        }

        // rendimientos diarios
        const rendimientos = [];
        for (let i = 1; i < prices.length; i++) {
            const r = (prices[i].close / prices[i - 1].close) - 1;
            rendimientos.push(r);
        }

        // ordenar
        const sorted = [...rendimientos].sort((a, b) => a - b);

        // percentil según confianza
        const nivel = (100 - confianza) / 100; // ej: 0.05 para 95%
        const idx = Math.floor(sorted.length * nivel);
        const varDiario = sorted[idx];

        // ajustar al horizonte temporal
        const varHorizonte = varDiario * Math.sqrt(horizonte);

        // pérdida en monto
        const monto = parseFloat(inversion) || 0;
        const perdida = monto * varHorizonte;

        setVarResult({ varDiario, varHorizonte, perdida });
    };

    return (
        <div className="bg-gray-500 m-4 p-4 rounded-xl text-[#FFFFFF]">
            <div className="bg-black p-4 rounded-xl mr-auto place-self-center lg:col-span-7">
                <h1 className="mb-4 text-4xl flex justify-center text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                    Simulacion VaR
                </h1>

                {/* Ticker */}
                <div className="grid grid-cols-2 grid-rows-[auto auto] gap-8 mb-4">
                    <p className="max-w-[300px] ml-auto text-justify items-center border border-colapse p-4 rounded-xl">1. Ingrese el símbolo de la empresa para generar el grafico (por ejemplo: AAPL para Apple o NVDA para Nvidia).</p>
                    <div className="flex flex-col justify-center items-center mr-auto min-w-[200px]">
                        <label className="block mb-1">SIMBOLO BURSÁTIL</label>
                        <input
                            type="text"
                            value={ticker}
                            onChange={(e) => setTicker(e.target.value.toUpperCase())}
                            className="border p-1 text-center rounded text-[#000000] mb-1 w-full"
                        />
                        <button onClick={handleBuscar} className="p-1 bg-[#FFFFFF] text-black rounded w-full hover:bg-gray-500 hover:text-white">
                            Generar Grafico
                        </button>
                    </div>
                </div>

                {/* Gráfico */}
                {prices.length > 0 && (
                    <div className="mb-4 h-64 bg-white p-4 rounded-xl">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={prices}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="close" stroke="#000000" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}

                {/* Inversión */}
                <div className="grid grid-cols-2 grid-rows-[auto auto] gap-8 mb-4">
                    <p className="max-w-[300px] ml-auto text-justify items-center border border-colapse p-4 rounded-xl">2. Digite el monto de inversión en dólares.</p>
                    <div className="flex flex-col justify-center items-center mr-auto min-w-[200px]">
                        <label className="block mb-1">Inversión ($)</label>
                        <input
                            type="number"
                            value={inversion}
                            onChange={(e) => setInversion(e.target.value)}
                            className="border p-1 rounded text-[#000000] text-center w-full"
                        />
                    </div>
                </div>

                {/* Horizonte */}
                <div className="grid grid-cols-2 grid-rows-[auto auto] gap-8 mb-4">
                    <p className="max-w-[300px] ml-auto text-justify items-center border border-colapse p-4 rounded-xl">3. Seleccione el horizonte temporal (en días).</p>
                    <div className="flex flex-col justify-center items-center mr-auto min-w-[200px]">
                        <label className="block mb-2">Horizonte temporal</label>
                        <select
                            value={horizonte}
                            onChange={(e) => setHorizonte(Number(e.target.value))}
                            className="border p-1 rounded text-[#000000] w-full text-center"
                        >
                            <option value={1}>1 día</option>
                            <option value={5}>5 días</option>
                            <option value={10}>10 días</option>
                        </select>
                    </div>
                </div>

                {/* Confianza */}
                <div className="grid grid-cols-2 grid-rows-[auto auto] gap-8 mb-4">
                    <p className="max-w-[300px] ml-auto text-justify items-center border border-colapse p-4 rounded-xl">4. Elija el nivel de confianza para el cálculo del VaR.</p>
                    <div className="flex flex-col justify-center items-center mr-auto min-w-[200px]">
                        <label className="block mb-2">Nivel de confianza</label>
                        <select
                            value={confianza}
                            onChange={(e) => setConfianza(Number(e.target.value))}
                            className="border p-1 rounded text-[#000000] w-full text-center"
                        >
                            <option value={90}>90%</option>
                            <option value={95}>95%</option>
                            <option value={99}>99%</option>
                        </select>
                    </div>
                </div>

                {/* Botón calcular */}
                <button
                    onClick={handleCalcularVaR}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    Calcular VaR
                </button>

                {/* Resultados */}
                {varResult && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-xl text-black ">
                        <p>VaR diario ({confianza}%): {(varResult.varDiario * 100).toFixed(2)}%</p>
                        <p>VaR a {horizonte} días: {(varResult.varHorizonte * 100).toFixed(2)}%</p>
                        <p>Pérdida máxima esperada en monto: ${Math.abs(varResult.perdida).toFixed(2)}</p>
                        <hr className="my-2" />
                        <p>
                            👉 El VaR indica la pérdida máxima esperada con {confianza}% de confianza
                            en un horizonte de {horizonte} día(s).
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                            📌 Recordatorios:<br />
                            - El VaR mide pérdidas, no ganancias.<br />
                            - No garantiza el 100% de certeza (siempre hay un {100 - confianza}% de probabilidad de pérdidas mayores).<br />
                            - El VaR no explica las causas de la pérdida, solo cuantifica el riesgo bajo condiciones normales de mercado.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Simulador;
