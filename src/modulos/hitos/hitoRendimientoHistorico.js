import Hitos from "./hitos";
import ComparadorActivos from "../../componentes/comparadorActivos";
import EvaluacionHito from "../../componentes/evaluacionHito";

import rendimiento from "../../assets/rendimientoHistorico.jpg"

//hook de desplazamiento:
import useSmoothScroll from "../../hooks/useSmoothScroll";

const HitoRendimientoHistorico = () => {

    useSmoothScroll("contenido", 1100);

    return (
        <div>
            <Hitos />
            <div id="contenido" className="min-h-screen bg-gray-500 p-4 gap-10 m-4 rounded-xl">

                <section className="bg-black rounded-xl">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">

                        {/* Texto a la izquierda */}
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                Introducción breve
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                El análisis del <span className="font-semibold">rendimiento histórico</span> permite comparar distintos activos financieros (acciones, bonos, divisas, criptomonedas, etc.) a lo largo del tiempo.
                                <br /><br />
                                <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                    Esto ayuda a responder preguntas como:
                                </h1>
                                <ul className="list-disc list-inside text-gray-200 space-y-1 mt-2">
                                    <li>¿Cuál activo tuvo el mejor <span className="font-semiblod">desempeño</span> en un periodo específico?</li>
                                    <li>¿Cuál presenta mayor <span className="font-semibold">estabilidad</span> o riesgo?</li>
                                    <li>¿Cómo se <span className="font-semibold">comporta</span> un activo frente a otros en diferentes contextos del mercado?</li>
                                </ul>
                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-[#FFFFFF] rounded-xl h-[350px]">
                            <img className="w-full p-4" src={rendimiento} alt="mockup" />
                        </div>

                    </div>
                </section>


                <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-black rounded-xl mt-4 p-4">

                    {/* EJEMPLO arriba izquierda */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl flex flex-col justify-center bg-[#FFFFFF] p-4">
                        <div className="bg-black rounded-xl p-4 flex flex-col items-start   ">
                            <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                ACCIONES
                            </h1>
                            <table className="w-full text-[#FFFFFF] border-collapse border border-[#FFFFFF]">
                                <thead className="border border-gray-300 ">
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Accion A</th>
                                        <th>Accion B</th>
                                        <th>Bono</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <th className="font-light">Enero</th>
                                        <th>2.0</th>
                                        <th>1.5</th>
                                        <th>0.5</th>
                                    </tr>
                                    <tr>
                                        <th>Febrero</th>
                                        <th>3.0</th>
                                        <th>-1.0</th>
                                        <th>0.4</th>
                                    </tr>
                                    <tr>
                                        <th>Marzo</th>
                                        <th>-2.0</th>
                                        <th>4.0</th>
                                        <th>0.6</th>
                                    </tr>
                                    <tr>
                                        <th>Abril</th>
                                        <th>1.0</th>
                                        <th>2.0</th>
                                        <th>0.5</th>
                                    </tr>
                                </tbody>

                            </table>
                            <p className="max-w-2xl mt-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                    INTERPREACIONES
                                </h1>

                                <ul className="list-disc list-inside text-[#FFFFFF]space-y-1 mt-2">
                                    <li><span className="font-semibold">Acción A</span> tuvo mejor desempeño acumulado en el primer trimestre (5.9%), pero mostró caídas bruscas en marzo.</li>
                                    <li><span className="font-semibold">Acción B</span> fue más volátil: grandes pérdidas en febrero y fuertes ganancias en marzo.</li>
                                    <li><span className="font-semibold">Bono</span> fue el más estable, con rendimientos pequeños pero consistentes.</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    {/* Caja verde abajo izquierda */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#FFFFFF] rounded-xl p-4 flex flex-col justify-center shadow-md">
                        <div className="p-4">
                            <ComparadorActivos />
                        </div>
                    </div>


                    {/* Preguntas ocupando toda la segunda columna */}
                    <div className="bg-[#FFFFFF] col-start-2 col-end-3 row-span-2 flex items-center justify-center rounded-xl">
                        <EvaluacionHito
                            hito="rendimientoHistorico"
                            preguntas={[
                                {
                                    id: "p1",
                                    texto: "¿Qué significa que un activo tenga un rendimiento promedio mayor que otro?",
                                    opciones: [
                                        "Que siempre es la mejor opción para invertir.",
                                        "Que, en promedio, generó más ganancias que el otro.",
                                        "Que no presenta riesgos financieros."
                                    ],
                                    correcta: "Que, en promedio, generó más ganancias que el otro."
                                },
                                {
                                    id: "p2",
                                    texto: "¿Por qué no siempre el activo con mayor rendimiento histórico es la mejor opción?",
                                    opciones: [
                                        "Porque puede estar asociado a una mayor volatilidad o riesgo.",
                                        "Porque siempre tendrá pérdidas a largo plazo.",
                                        "Porque no genera ningún beneficio real."
                                    ],
                                    correcta: "Porque puede estar asociado a una mayor volatilidad o riesgo."
                                },
                                {
                                    id: "p3",
                                    texto: "¿Qué relación hay entre estabilidad (desviación estándar baja) y el rendimiento histórico?",
                                    opciones: [
                                        "Una desviación baja implica menos riesgo, pero no garantiza un mayor rendimiento.",
                                        "Menor desviación siempre asegura más ganancias.",
                                        "Mayor desviación asegura menos riesgo."
                                    ],
                                    correcta: "Una desviación baja implica menos riesgo, pero no garantiza un mayor rendimiento."
                                },
                                {
                                    id: "p4",
                                    texto: "¿Qué significa que dos activos tengan rendimientos similares, pero distinta desviación estándar?",
                                    opciones: [
                                        "Que el activo con menor desviación es menos riesgoso y más predecible.",
                                        "Que ambos tienen exactamente el mismo riesgo.",
                                        "Que el activo con más desviación es siempre mejor opción."
                                    ],
                                    correcta: "Que el activo con menor desviación es menos riesgoso y más predecible."
                                }
                            ]}
                        />

                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoRendimientoHistorico;