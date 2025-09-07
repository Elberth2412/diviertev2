import { NavLink } from "react-router-dom";

const Hitos = () => {

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
            ${isActive ? "bg-black text-white" : "bg-white"}`
                    }
                >
                    Valor en Riesgo (VaR)
                </NavLink>

                <NavLink
                    to="/hitos/FactoresRiesgo"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-3 row-end-4 col-start-2 col-end-3 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                    }
                >
                    Factores de riesgo
                </NavLink>

                <NavLink
                    to="/hitos/EstadisticasBasicas"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-1 row-end-2 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                    }
                >
                    Estadísticas básicas
                </NavLink>

                <NavLink
                    to="/hitos/RendimientoHistorico"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-3 row-end-4 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                    }
                >
                    Rendimiento histórico
                </NavLink>

                <NavLink
                    to="/hitos/VarSimulacion"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-5 row-end-6 col-start-3 col-end-4 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                    }
                >
                    Simulación VaR
                </NavLink>

                <NavLink
                    to="/hitos/VarPortafolios"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-2 row-end-3 col-start-4 col-end-5 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                    }
                >
                    VaR en portafolios
                </NavLink>

                <NavLink
                    to="/hitos/VarInterpretacion"
                    className={({ isActive }) =>
                        `shadow-2xl row-start-4 row-end-5 col-start-4 col-end-5 rounded-xl grid place-items-center hover:scale-105 duration-300 
            ${isActive ? "bg-black text-white" : "bg-white"}`
                    }
                >
                    Interpretación VaR
                </NavLink>


            </div>

        </div>
    );
}

export default Hitos;