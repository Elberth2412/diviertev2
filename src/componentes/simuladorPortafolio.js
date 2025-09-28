import { useState } from "react";

const SimuladorPortafolio = () => {
    const [tipo, setTipo] = useState("");
    const [resultado, setResultado] = useState(null);

    // Valores simulados (rendimiento medio y desviación estándar anualizada)
    const portafolios = {
        Conservador: { media: 0.04, desviacion: 0.03 },
        Balanceado: { media: 0.07, desviacion: 0.07 },
        Agresivo: { media: 0.12, desviacion: 0.15 },
    };

    const calcularVaR = () => {
        if (!tipo) return;

        const nivelConfianza = 1.65; // Z-score aproximado para 95%
        const { media, desviacion } = portafolios[tipo];
        const var95 = -(media - nivelConfianza * desviacion); // pérdida esperada

        setResultado({
            media: (media * 100).toFixed(2),
            desviacion: (desviacion * 100).toFixed(2),
            var95: (var95 * 100).toFixed(2),
        });
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-4 min-w-xl mx-auto min-h-[250px]">
            <h2 className="text-2xl font-bold mb-4 text-center">📊 Simulador de VaR por Portafolio</h2>

            {/* Selección de portafolio */}
            <select
                className="w-full p-2 border rounded-lg mb-4"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
            >
                <option value="">-- Selecciona un portafolio --</option>
                <option value="Conservador">Conservador</option>
                <option value="Balanceado">Balanceado</option>
                <option value="Agresivo">Agresivo</option>
            </select>

            <button
                onClick={calcularVaR}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Calcular VaR
            </button>

            {/* Resultados */}
            {resultado && (
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                    <p><span className="font-semibold">📈 Rendimiento promedio:</span> {resultado.media}%</p>
                    <p><span className="font-semibold">📊 Volatilidad (σ):</span> {resultado.desviacion}%</p>
                    <p><span className="font-semibold">⚠️ VaR (95%):</span> {resultado.var95}%</p>
                    <p className="mt-2 text-sm text-gray-600 italic">
                        Interpretación: Con 95% de confianza, la pérdida máxima estimada en un periodo es {resultado.var95}%.
                    </p>
                </div>
            )}
        </div>
    );
};

export default SimuladorPortafolio;