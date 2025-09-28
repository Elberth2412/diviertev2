import React, { useState } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const VarEscenarios = () => {
    const [data, setData] = useState([
        { escenario: "Optimista", VaR: -5 },
        { escenario: "Conservador", VaR: -15 },
        { escenario: "Pesimista", VaR: -30 },
    ]);

    const [inversion, setInversion] = useState(1000);
    const [error, setError] = useState("");


    // Validar que los escenarios estén en orden lógico
    const handleChange = (index, value) => {
        // Permitimos vacío como string
        let val = value === "" ? "" : Math.min(parseFloat(value) || 0, 0);

        const newData = data.map((item, i) =>
            i === index ? { ...item, VaR: value } : item // guardamos como string
        );

        // Reglas de validación
        if (index === 0 && newData[1].VaR !== "" && val <= parseFloat(newData[1].VaR)) {
            setError("❌ El escenario optimista debe ser mayor al conservador.");
            return;
        }
        if (index === 1) {
            if (newData[0].VaR !== "" && val >= parseFloat(newData[0].VaR)) {
                setError("❌ El conservador debe ser menor al optimista.");
                return;
            }
            if (newData[2].VaR !== "" && val <= parseFloat(newData[2].VaR)) {
                setError("❌ El conservador debe ser mayor al pesimista.");
                return;
            }
        }
        if (index === 2 && newData[1].VaR !== "" && val >= parseFloat(newData[1].VaR)) {
            setError("❌ El pesimista debe ser menor al conservador.");
            return;
        }

        setError(""); // ✅ limpiamos el error si todo está bien
        setData(newData);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
                📊 Comparación del VaR en diferentes escenarios
            </h2>

            {/* Inputs para escenarios */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                {data.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <label className="block font-semibold text-gray-700 mb-2">
                            {item.escenario}
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            max="0"
                            value={item.VaR}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <p className="mt-2 text-sm text-gray-600 italic">
                            VaR (%) de este escenario
                        </p>
                    </div>
                ))}

            </div>
            {error && (
                <div className="mb-4 text-red-600 font-medium text-center">
                    {error}
                </div>
            )}
            {/* Inversión */}
            <div className="mb-6 bg-white p-4 rounded-lg shadow">
                <label className="block font-semibold text-gray-700 mb-2">
                    Inversión inicial ($)
                </label>
                <input
                    type="text" // 👈 string para permitir vacío
                    value={inversion}
                    onChange={(e) => setInversion(e.target.value)} // guardamos texto
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Gráfico */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="escenario" />
                    <YAxis label={{ value: "VaR (%)", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="VaR" fill="#2563eb" />
                </BarChart>
            </ResponsiveContainer>

            {/* Interpretación dinámica */}
            <div className="mt-6 bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3">📌 Interpretación</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    {data.map((item, index) => {
                        const inversionNum = parseFloat(inversion);
                        const perdida = !isNaN(inversionNum) ? inversionNum * (item.VaR / 100) : 0;
                        return (
                            <li key={index}>
                                En el escenario{" "}
                                <span className="font-semibold">{item.escenario}</span>, con un
                                VaR de <span className="text-blue-600">{item.VaR}%</span>, tu
                                pérdida máxima estimada sería de{" "}
                                <span className="font-semibold text-red-600">
                                    ${Math.abs(perdida).toFixed(2)}
                                </span>{" "}
                                sobre una inversión de ${inversion}.
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default VarEscenarios;