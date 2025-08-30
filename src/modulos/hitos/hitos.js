import { NavLink } from "react-router-dom";

const Hitos = () => {
    
    return (
        <div className="grid grid-cols-4 grid-rows-5 h-screen bg-gray-500 mb-5 p-4 gap-10 m-4 rounded-xl text-black">
            <NavLink
                to="/hitos/ConceptosBasicos"
                className={({ isActive }) =>
                    `row-start-2 row-end-3 col-start-1 col-end-2 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                }
            >
                Conceptos Básicos
            </NavLink>

            <NavLink
                to="/hitos/ValorRiesgo"
                className={({ isActive }) =>
                    `row-start-4 row-end-5 col-start-1 col-end-2 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                }
            >
                Valor en Riesgo (VaR)
            </NavLink>

            <NavLink
                to="/hitos/FactoresRiesgo"
                className={({ isActive }) =>
                    `row-start-3 row-end-4 col-start-2 col-end-3 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-green-500" : "bg-green-300"}`
                }
            >
                Factores de riesgo
            </NavLink>

            <NavLink
                to="/hitos/EstadisticasBasicas"
                className={({ isActive }) =>
                    `row-start-1 row-end-2 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-yellow-500" : "bg-yellow-300"}`
                }
            >
                Estadísticas básicas
            </NavLink>

            <NavLink
                to="/hitos/RendimientoHistorico"
                className={({ isActive }) =>
                    `row-start-3 row-end-4 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-purple-500" : "bg-purple-300"}`
                }
            >
                Rendimiento histórico
            </NavLink>

            <NavLink
                to="/hitos/VarSimulacion"
                className={({ isActive }) =>
                    `row-start-5 row-end-6 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-pink-500" : "bg-pink-300"}`
                }
            >
                Simulación VaR
            </NavLink>

            <NavLink
                to="/hitos/VarPortafolios"
                className={({ isActive }) =>
                    `row-start-2 row-end-3 col-start-4 col-end-5 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-indigo-500" : "bg-indigo-300"}`
                }
            >
                VaR en portafolios
            </NavLink>

            <NavLink
                to="/hitos/VarInterpretacion"
                className={({ isActive }) =>
                    `row-start-4 row-end-5 col-start-4 col-end-5 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-orange-500" : "bg-orange-300"}`
                }
            >
                Interpretación VaR
            </NavLink>
        </div>
    );
}

export default Hitos;