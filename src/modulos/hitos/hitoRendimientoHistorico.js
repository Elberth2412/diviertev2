import Hitos from "./hitos";
import ComparadorActivos from "../../componentes/comparadorActivos";

const HitoRendimientoHistorico = () => {

    return (
        <div>
            <Hitos />
            <div className="min-h-screen bg-gray-500 p-4 gap-10 m-4 rounded-xl">

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
                            <img className="w-full p-4" src="" alt="mockup" />
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
                        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full">
                            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                                Preguntas de Autoevaluación
                            </h2>

                            {/* Pregunta 1 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    1. ¿Qué significa que un activo tenga un rendimiento promedio mayor que otro?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Que siempre es la mejor opción para invertir.
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Que, en promedio, generó más ganancias que el otro. ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Que no presenta riesgos financieros.
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 2 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    2. ¿Por qué no siempre el activo con mayor rendimiento histórico es la mejor opción?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Porque puede estar asociado a una mayor volatilidad o riesgo. ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Porque siempre tendrá pérdidas a largo plazo.
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Porque no genera ningún beneficio real.
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 3 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    3. ¿Qué relación hay entre estabilidad (desviación estándar baja) y el rendimiento histórico?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Una desviación baja implica menos riesgo, pero no garantiza un mayor rendimiento. ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Menor desviación siempre asegura más ganancias.
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Mayor desviación asegura menos riesgo.
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 4 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    4. ¿Qué significa que dos activos tengan rendimientos similares, pero distinta desviación estándar?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Que el activo con menor desviación es menos riesgoso y más predecible. ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Que ambos tienen exactamente el mismo riesgo.
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Que el activo con más desviación es siempre mejor opción.
                                    </label>
                                </div>
                            </div>

                            <button className="w-full mt-4 bg-black hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                                Enviar respuestas
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoRendimientoHistorico;