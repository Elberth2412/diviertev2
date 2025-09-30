import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth } from "../services/AuthContext";

const EvaluacionHito = ({ hito, preguntas }) => {
    const { usuario, setProgreso } = useAuth(); // 👈 ahora traemos setProgreso también
    const [respuestas, setRespuestas] = useState({});
    const [resultado, setResultado] = useState(null);

    const handleChange = (id, value) => {
        setRespuestas({ ...respuestas, [id]: value });
    };

    const handleSubmit = async () => {
        const todasCorrectas = preguntas.every(
            (p) => respuestas[p.id] === p.correcta
        );

        if (todasCorrectas) {
            setResultado("✅ ¡Felicidades! Has desbloqueado el siguiente hito.");
            
            if (usuario) {
                const ref = doc(db, "usuarios", usuario.uid);
                await updateDoc(ref, { [`progreso.${hito}`]: true });

                // 🔥 actualización instantánea en el estado global
                setProgreso((prev) => ({
                    ...prev,
                    [hito]: true,
                }));
            }
        } else {
            setResultado("❌ Algunas respuestas son incorrectas. Inténtalo de nuevo.");
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                📌 Evaluación del Hito
            </h2>

            {preguntas.map((p) => (
                <div key={p.id} className="mb-6">
                    <p className="font-medium text-gray-700 mb-2">{p.texto}</p>
                    {p.opciones.map((op, i) => (
                        <label key={i} className="flex items-center">
                            <input
                                type="radio"
                                name={p.id}
                                value={op}
                                onChange={(e) => handleChange(p.id, e.target.value)}
                                className="mr-2"
                            />
                            <span className="ml-2">{op}</span>
                        </label>
                    ))}
                </div>
            ))}

            <button
                onClick={handleSubmit}
                className="w-full mt-4 bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-500"
            >
                Enviar respuestas
            </button>

            {resultado && (
                <p className="font-medium text-center mt-4">{resultado}</p>
            )}
        </div>
    );
};

export default EvaluacionHito;