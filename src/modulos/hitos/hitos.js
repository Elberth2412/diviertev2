import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../services/AuthContext";

const Hitos = () => {
    const { usuario, progreso: progresoGlobal, setProgreso } = useAuth(); // 👈 traemos progreso y setProgreso del contexto
    const [progreso, setProgresoLocal] = useState({});

    useEffect(() => {
        const fetchProgreso = async () => {
            if (usuario) {
                const ref = doc(db, "usuarios", usuario.uid);
                const snap = await getDoc(ref);
                if (snap.exists()) {
                    const data = snap.data().progreso || {};
                    setProgresoLocal(data);
                    setProgreso(data); // 🔥 sincronizamos también en el contexto global
                }
            }
        };
        fetchProgreso();
    }, [usuario, setProgreso]);

    const bloq = "pointer-events-none opacity-50 cursor-not-allowed"

    // 🔒 función para bloquear
    const bloqueado = (hito) => {
        const anterior = dependencias[hito];
        if (!anterior) return ""; // los que no dependen de nadie (ej: Conceptos Básicos)

        // usamos progresoGlobal (instantáneo) y si no existe, caemos a progreso local
        const progresoActivo = progresoGlobal || progreso;

        return progresoActivo[anterior]
            ? ""
            : !bloq;
    };

    const dependencias = {
        valorRiesgo: "conceptosBasicos",
        factoresRiesgo: "valorRiesgo",
        estadisticasBasicas: "factoresRiesgo",
        rendimientoHistorico: "estadisticasBasicas",
        varSimulacion: "rendimientoHistorico",
        varPortafolios: "varSimulacion",
        varInterpretacion: "varPortafolios",
    };

    return (
        <div className="bg-gray-500 m-4 p-4 rounded-xl">
            <div className="grid grid-cols-4 grid-rows-5 h-[500px] bg-white p-8 gap-10 rounded-xl text-black">
                <NavLink
                    to="/hitos/ConceptosBasicos"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-2 row-end-3 col-start-1 col-end-2 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                    }
                >
                    Conceptos Básicos
                </NavLink>

                <NavLink
                    to="/hitos/ValorRiesgo"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-4 row-end-5 col-start-1 col-end-2 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"} ${bloqueado(
                            "valorRiesgo"
                        )}`
                    }
                >
                    Valor en Riesgo (VaR)
                </NavLink>

                <NavLink
                    to="/hitos/FactoresRiesgo"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-3 row-end-4 col-start-2 col-end-3 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"} ${bloqueado(
                            "factoresRiesgo"
                        )}`
                    }
                >
                    Factores de riesgo
                </NavLink>

                <NavLink
                    to="/hitos/EstadisticasBasicas"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-1 row-end-2 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"} ${bloqueado(
                            "estadisticasBasicas"
                        )}`
                    }
                >
                    Estadísticas básicas
                </NavLink>

                <NavLink
                    to="/hitos/RendimientoHistorico"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-3 row-end-4 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"} ${bloqueado(
                            "rendimientoHistorico"
                        )}`
                    }
                >
                    Rendimiento histórico
                </NavLink>

                <NavLink
                    to="/hitos/VarSimulacion"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-5 row-end-6 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"} ${bloqueado(
                            "varSimulacion"
                        )}`
                    }
                >
                    Simulación VaR
                </NavLink>

                <NavLink
                    to="/hitos/VarPortafolios"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-2 row-end-3 col-start-4 col-end-5 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"} ${bloqueado(
                            "varPortafolios"
                        )}`
                    }
                >
                    VaR en portafolios
                </NavLink>

                <NavLink
                    to="/hitos/VarInterpretacion"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-4 row-end-5 col-start-4 col-end-5 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"} ${bloqueado(
                            "varInterpretacion"
                        )}`
                    }
                >
                    Interpretación VaR
                </NavLink>
            </div>
        </div>
    );
};

export default Hitos;
