import React, { useState, useRef } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const ComparadorActivos = () => {
    const [activoA, setActivoA] = useState("");
    const [activoB, setActivoB] = useState("");
    const [data, setData] = useState([]);
    const [resumen, setResumen] = useState(null);
    const [error, setError] = useState("");
    const chartRef = useRef(null);

    // función auxiliar
    const calcularEstadisticas = (valores) => {
        const n = valores.length;
        const media = valores.reduce((a, b) => a + b, 0) / n;
        const varianza =
            valores.reduce((sum, v) => sum + Math.pow(v - media, 2), 0) / n;
        const desviacion = Math.sqrt(varianza);
        const rendimiento = ((valores[n - 1] - valores[0]) / valores[0]) * 100;
        return { media, desviacion, rendimiento };
    };

    const handleComparar = () => {
        const preciosA = activoA.split(",").map((p) => parseFloat(p.trim()));
        const preciosB = activoB.split(",").map((p) => parseFloat(p.trim()));

        // Validación: mismo número de precios
        if (preciosA.length !== preciosB.length) {
            setError(
                `❌ Ambos activos deben tener el mismo número de precios (A: ${preciosA.length}, B: ${preciosB.length}).`
            );
            setData([]);
            setResumen(null);
            return;
        }

        setError("");

        // dataset para el gráfico
        const newData = preciosA.map((precio, index) => ({
            dia: `Día ${index + 1}`,
            ActivoA: precio,
            ActivoB: preciosB[index],
        }));

        setData(newData);

        // estadísticas
        const statsA = calcularEstadisticas(preciosA);
        const statsB = calcularEstadisticas(preciosB);
        setResumen({ A: statsA, B: statsB });

        // scroll al gráfico
        setTimeout(() => {
            chartRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <div className="bg-white rounded-xl p-4 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Comparador de Activos
            </h2>

            <p className="text-gray-600 mb-4 text-sm">
                Ingresa los precios de cierre de dos activos (separados por comas).
                Ejemplo: <span className="font-semibold">100, 102, 98, 105</span>
            </p>

            {/* Inputs */}
            <div className="grid grid-cols-3 gap-4 mb-4 items-center">
                <div>
                    <span className="font-semibold">ACTIVO A</span>
                    <textarea
                        placeholder="Precios (ej: 10,12,15)"
                        value={activoA}
                        onChange={(e) => setActivoA(e.target.value)}
                        className="border p-1 rounded w-full"
                    />
                </div>

                <div>
                    <span className="font-semibold">ACTIVO A</span>
                    <textarea
                        placeholder="Precios (ej: 8,9,11)"
                        value={activoB}
                        onChange={(e) => setActivoB(e.target.value)}
                        className="border p-1 rounded w-full"
                    />
                </div>

                {/* Botón */}
                <button
                    onClick={handleComparar}
                    className="w-full h-1/2 bg-gray-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                    Comparar
                </button>
            </div>

            {/* Error */}
            {error && (
                <p className="text-red-600 mt-3 font-medium text-center">{error}</p>
            )}

            {/* Gráfico */}
            {data.length > 0 && (
                <div ref={chartRef} className="mt-2 grid grid-cols-2 place-items-start gap-4 items-center">
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="dia" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="ActivoA" stroke="#2563eb" />
                            <Line type="monotone" dataKey="ActivoB" stroke="#16a34a" />
                        </LineChart>
                    </ResponsiveContainer>

                    {/* Resumen numérico */}
                    {resumen && (
                        <div className=" bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold mb-3">📊 Resumen numérico</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-3 rounded-lg shadow">
                                    <p className="font-semibold">Activo A</p>
                                    <p>Media: {resumen.A.media.toFixed(2)}</p>
                                    <p>Desviación estándar: {resumen.A.desviacion.toFixed(2)}</p>
                                    <p>Rendimiento: {resumen.A.rendimiento.toFixed(2)}%</p>
                                </div>
                                <div className="bg-white p-3 rounded-lg shadow">
                                    <p className="font-semibold">Activo B</p>
                                    <p>Media: {resumen.B.media.toFixed(2)}</p>
                                    <p>Desviación estándar: {resumen.B.desviacion.toFixed(2)}</p>
                                    <p>Rendimiento: {resumen.B.rendimiento.toFixed(2)}%</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ComparadorActivos;