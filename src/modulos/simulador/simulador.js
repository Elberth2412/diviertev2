import React, { useState } from "react";
import fetchPrices from "../../services/financeApi";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../services/AuthContext";

const Simulador = () => {
    const [ticker, setTicker] = useState("");
    const [prices, setPrices] = useState([]);
    const [inversion, setInversion] = useState("");
    const [horizonte, setHorizonte] = useState(5);   // nuevo
    const [confianza, setConfianza] = useState(95);  // nuevo
    const [varResult, setVarResult] = useState(null);
    const { usuario } = useAuth();

    const handleBuscar = async () => {
        if (!ticker) return;
        try {
            const data = await fetchPrices(ticker);
            setPrices(data);
        } catch (err) {
            console.error("Error al obtener precios:", err);
        }
    };


    const handleCalcularVaR = async () => {
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

        // 🔹 Guardar la simulación en Firestore
        if (usuario) {
            try {
                const ref = collection(db, "usuarios", usuario.uid, "simulaciones");
                await addDoc(ref, {
                    ticker,
                    nivelConfianza: confianza,
                    inversion: monto,
                    varDiario,
                    varHorizonte,
                    perdida,
                    fecha: new Date(),
                });
                console.log("✅ Simulación guardada en Firestore");
            } catch (error) {
                console.error("Error al guardar simulación:", error);
            }
        }
    };


    return (
        <div className="bg-gray-500 m-4 p-4 rounded-xl text-[#FFFFFF]">
            <div className="bg-black p-4 rounded-xl mr-auto place-self-center lg:col-span-7">
                <h1 className="mb-4 text-4xl flex justify-center text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                    Simulacion VaR
                </h1>

                {/* Ticker */}
                <div className="grid grid-cols-2 gap-4 mb-4 bg-gray-500 w-fit ml-auto mr-auto p-4 rounded-xl">
                    <p className="max-w-[290px] text-justify border border-colapse p-4 rounded-xl">1. Ingrese el símbolo de la empresa para generar el grafico (por ejemplo: AAPL para Apple o NVDA para Nvidia).</p>
                    <div className="flex flex-col items-center w-full">
                        <label className="block mb-1">SIMBOLO BURSÁTIL</label>
                        <input
                            type="text"
                            value={ticker}
                            onChange={(e) => setTicker(e.target.value.toUpperCase())}
                            className="border p-1 text-center rounded text-[#000000] mb-1 w-full "
                            placeholder="Ejm: NVDA"
                        />
                        <button onClick={handleBuscar} className="p-1 bg-[#FFFFFF] text-black rounded-xl w-full hover:bg-black hover:text-white duration-500 hover:scale-105">
                            Generar Grafico
                        </button>
                    </div>

                </div>

                {/* Gráfico */}
                {prices.length > 0 && (
                    <div className="mb-4 h-64 bg-white p-4 rounded-xl">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={prices} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="close" stroke="#000000" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}

                <div
                    className={`grid bg-black p-4 w-fit mx-auto transition-all duration-500 
    ${varResult ? "grid-cols-2" : "grid-cols-1"}`}
                >
                    <div>
                        {/* Inversión */}
                        <div className="grid grid-cols-2 bg-gray-500 rounded-xl gap-4 mb-4 w-fit mx-auto p-4">
                            <p className="max-w-[290px] text-justify border border-colapse p-4 rounded-xl">
                                2. Digite el monto de inversión en dólares.
                            </p>
                            <div className="flex flex-col items-center w-full">
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
                        <div className="grid grid-cols-2 bg-gray-500 rounded-xl p-4 gap-4 mb-4 w-fit mx-auto">
                            <p className="max-w-[290px] text-justify border border-colapse p-4 rounded-xl">
                                3. Seleccione el horizonte temporal (en días).
                            </p>
                            <div className="flex flex-col w-full items-center">
                                <label className="block mb-2">Horizonte temporal</label>
                                <select
                                    value={horizonte}
                                    onChange={(e) => setHorizonte(Number(e.target.value))}
                                    className="border p-1 rounded text-[#000000] w-full text-center cursor-pointer"
                                >
                                    <option value={1}>1 día</option>
                                    <option value={5}>5 días</option>
                                    <option value={10}>10 días</option>
                                </select>
                            </div>
                        </div>

                        {/* Confianza */}
                        <div className="grid grid-cols-2 gap-4 mb-4 bg-gray-500 w-fit mx-auto p-4 rounded-xl">
                            <p className="max-w-[290px] text-justify border border-colapse p-4 rounded-xl">
                                4. Elija el nivel de confianza para el cálculo del VaR.
                            </p>
                            <div className="flex flex-col">
                                <label className="block mb-2">Nivel de confianza</label>
                                <select
                                    value={confianza}
                                    onChange={(e) => setConfianza(Number(e.target.value))}
                                    className="border p-1 rounded text-[#000000] w-full text-center cursor-pointer"
                                >
                                    <option value={90}>90%</option>
                                    <option value={95}>95%</option>
                                    <option value={99}>99%</option>
                                </select>
                            </div>

                            {/* Botón calcular */}
                            <button
                                onClick={handleCalcularVaR}
                                className="col-span-2 p-1 bg-[#FFFFFF] text-[#000000] rounded-xl w-1/2 mr-auto ml-auto hover:bg-black hover:text-white duration-500 hover:scale-105"
                            >
                                Calcular VaR
                            </button>
                        </div>
                    </div>

                    {/* Resultados */}
                    {varResult && (
                        <div className="mb-auto mt-auto p-4 bg-gray-100 rounded-xl text-black">
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
        </div>
    );
};

export default Simulador;
