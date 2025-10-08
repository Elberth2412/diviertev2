import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../services/AuthContext";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { collection, getDocs } from "firebase/firestore";

const Estadisticas = () => {
    const { usuario } = useAuth();
    const [progreso, setProgreso] = useState({});
    const [porcentaje, setPorcentaje] = useState(0);
    const [mensaje, setMensaje] = useState("");
    const [simulaciones, setSimulaciones] = useState([]);

    const colores = ["#6B7280", "#000000"];

    useEffect(() => {
        const fetchProgreso = async () => {
            if (usuario) {
                const ref = doc(db, "usuarios", usuario.uid);
                const snap = await getDoc(ref);
                if (snap.exists()) {
                    const prog = snap.data().progreso || {};
                    setProgreso(prog);

                    const totalHitos = 7;
                    const completados = Object.values(prog).filter((v) => v).length;
                    const pct = Math.round((completados / totalHitos) * 100);
                    setPorcentaje(pct);

                    // mensaje motivacional según avance
                    if (pct < 25) setMensaje("🚀 Estás dando tus primeros pasos, sigue aprendiendo.");
                    else if (pct < 60) setMensaje("📈 Buen progreso, estás entendiendo los fundamentos financieros.");
                    else if (pct < 100) setMensaje("🔥 Ya dominas gran parte del curso, ¡sigue con el VaR!");
                    else setMensaje("🏆 ¡Has completado todos los hitos! Eres un experto en gestión de riesgo financiero.");
                }
            }
        };
        fetchProgreso();
    }, [usuario]);

    useEffect(() => {
        const fetchSimulaciones = async () => {
            if (usuario) {
                const ref = collection(db, "usuarios", usuario.uid, "simulaciones");
                const snap = await getDocs(ref);
                const sims = snap.docs.map((d) => d.data());
                setSimulaciones(sims.sort((a, b) => b.fecha?.toMillis() - a.fecha?.toMillis())); // más recientes primero
            }
        };
        fetchSimulaciones();
    }, [usuario]);

    const data = [
        { name: "Completado", value: porcentaje },
        { name: "Restante", value: 100 - porcentaje },
    ];

    return (
        <div className="bg-gray-500 m-4 p-4 rounded-xl min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-4">📊 Estadísticas de tu progreso</h1>

            <div className="grid grid-cols-3 gap-4 bg-black p-4 rounded-xl">

                {/* Gráfico de dona */}
                <div className="bg-white p-4 rounded-xl shadow-lg text-black flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold mb-4">Progreso general</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={90}
                                label={({ name, value }) => `${name}: ${value}%`}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Lista de hitos */}
                <div className="bg-white p-4 rounded-xl shadow-lg text-black">
                    <h2 className="text-xl font-semibold mb-4">📘 Hitos completados</h2>
                    <ul className="space-y-2">
                        {[
                            { nombre: "Conceptos Básicos", key: "conceptosBasicos" },
                            { nombre: "Valor en Riesgo (VaR)", key: "valorRiesgo" },
                            { nombre: "Factores de Riesgo", key: "factoresRiesgo" },
                            { nombre: "Estadísticas Básicas", key: "estadisticasBasicas" },
                            { nombre: "Rendimiento Histórico", key: "rendimientoHistorico" },
                            { nombre: "Simulación VaR", key: "varSimulacion" },
                            { nombre: "VaR en Portafolios", key: "varPortafolios" },
                            { nombre: "Interpretación VaR", key: "varInterpretacion" },
                        ].map((hito, i) => (
                            <li
                                key={i}
                                className={`p-3 rounded-lg flex justify-between items-center ${progreso[hito.key] ? "bg-gray-500 text-[#FFFFFF]": "bg-gray-200"
                                    }`}
                            >
                                <span className="font-medium">{hito.nombre}</span>
                                <span>
                                    {progreso[hito.key] ? "✅ Completado" : "⏳ Pendiente"}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    {/* Historial de simulaciones */}
                    <div className="bg-white text-black p-4 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold mb-4">🧾 Historial de simulaciones</h2>
                        <ul className="space-y-3">
                            {simulaciones.length > 0 && (

                                simulaciones.map((sim, i) => (
                                    <li
                                        key={i}
                                        className="border border-gray-300 rounded-lg p-3 flex justify-between items-center"
                                    >
                                        <div>
                                            <p className="font-semibold">{sim.ticker}</p>
                                            <p className="text-sm text-gray-600">
                                                Nivel de confianza: {sim.nivelConfianza}% <br />
                                                Inversión: ${sim.inversion.toFixed(2)}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-red-600 font-bold">
                                                VaR: {(sim.varPct * 100).toFixed(2)}%
                                            </p>
                                            <p className="text-gray-700 text-sm">
                                                Pérdida esperada: ${Math.abs(sim.perdida).toFixed(2)}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sección motivacional */}
            <div className="bg-white text-black p-4 rounded-xl mt-4 shadow-md">
                <h2 className="text-xl font-semibold mb-2">💬 Recomendación personal</h2>
                <p className="text-lg">{mensaje}</p>
                <p className="text-gray-700 mt-4 text-sm italic">
                    Recuerda: aprender sobre riesgo financiero no elimina las pérdidas, pero te da herramientas para **entenderlas, anticiparlas y reducir su impacto**.
                </p>
            </div>
        </div>
    );
};

export default Estadisticas;
