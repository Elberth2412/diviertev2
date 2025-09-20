import { useState } from "react";

const CalculadoraEstadisticas = () => {
    const [valores, setValores] = useState("");
    const [media, setMedia] = useState(null);
    const [desviacion, setDesviacion] = useState(null);

    const calcularEstadisticas = () => {
        // Convertir la cadena en array de números
        const numeros = valores
            .split(",")
            .map((num) => parseFloat(num.trim()))
            .filter((num) => !isNaN(num));

        if (numeros.length === 0) {
            setMedia(null);
            setDesviacion(null);
            return;
        }

        // Calcular media
        const suma = numeros.reduce((acc, num) => acc + num, 0);
        const promedio = suma / numeros.length;

        // Calcular desviación estándar
        const varianza =
            numeros.reduce((acc, num) => acc + Math.pow(num - promedio, 2), 0) /
            numeros.length;
        const desviacionEstandar = Math.sqrt(varianza);

        setMedia(promedio.toFixed(2));
        setDesviacion(desviacionEstandar.toFixed(2));
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-4 max-w-lg w-full mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Calculadora de Media y Desviación Estándar
            </h2>

            <p className="text-gray-600 mb-4 text-sm">
                Ingresa una lista de rendimientos separados por comas (ejemplo:
                <span className="font-semibold"> 2, 3, 5, -1, 4</span>)
            </p>

            <div className="flex gap-4">
                {/* Input */}
                <textarea
                    value={valores}
                    onChange={(e) => setValores(e.target.value)}
                    placeholder="Ej: 2, 3, 5, -1, 4"
                    className="w-1/2 p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Resultados */}
                <div className="w-1/2 mb-4 bg-gray-100 p-4 rounded-xl">
                    <p className="text-gray-800">
                        <span className="font-semibold">Media:</span> 
                        {media !== null && (
                             " "+media 
                        )}

                    </p>
                    <p className="text-gray-800">
                        <span className="font-semibold">Desviación Estándar:</span> 
                        {media !== null && (
                             " "+desviacion 
                        )}

                    </p>
                    <p className="mt-2 text-sm text-gray-600 italic">
                        👉 Interpretación: Una media positiva indica ganancias promedio. Una
                        desviación estándar alta implica mayor riesgo o volatilidad.
                    </p>
                </div>
            </div>

            {/* Botón */}
            <button
                onClick={calcularEstadisticas}
                className="w-full bg-black hover:bg-gray-500 text-white font-medium py-2 px-2 rounded-lg transition duration-200"
            >
                Calcular
            </button>

        </div>
    );
};

export default CalculadoraEstadisticas;