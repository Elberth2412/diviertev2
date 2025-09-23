import Hitos from "./hitos";
import SimuladorVaR from "../../componentes/simuladorVAR";

//Imagenes del carrusel:
import car1 from "../../assets/car-1.png";

const HitoVarSimulacion = () => {


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
                                <span className="font-semibold">VaR histórico:</span> método no paramétrico que estima la pérdida máxima esperada en un periodo específico, basándose en datos históricos de rendimientos.
                                <br /><br />
                                <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                    COMO SE CALCULA
                                </h1>
                                <ul className="list-disc list-inside text-gray-200 space-y-1 mb-4">
                                    <li>Se recopilan <span className="font-semibold">precios históricos</span> de un activo.</li>
                                    <li>Se convierten en <span className="font-semibold">rendimientos diarios.</span></li>
                                    <li>Se ordenan los rendimientos de menor a mayor.</li>
                                    <li>Y se selecciona el percentil correspondiente al nivel de confianza (ej: 5% si el nivel de confianza es 95%).</li>
                                </ul>
                                <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                    EJEMPLO
                                </h1>
                                Con 100 datos de rendimientos, si quieres un VaR al 95%, tomas el 5° peor rendimiento (percentil 5%).

                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-[#FFFFFF] rounded-xl h-[350px]">
                            <img className="w-full p-4" src={car1} alt="mockup" />
                        </div>

                    </div>
                </section>


                <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-black rounded-xl mt-4 p-4">

                    {/* EJEMPLO arriba izquierda */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-[#FFFFFF] p-4">
                        <div className="bg-black rounded-xl p-4 flex flex-col items-start   ">
                            <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                DATASET EJEMPLO
                            </h1>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <table className="mt-6 w-3/4 text-[#FFFFFF] border-collapse border border-[#FFFFFF] mx-auto">
                                        <thead className="border border-gray-300 ">
                                            <tr>
                                                <th>DIA</th>
                                                <th>PRECIOS</th>
                                                <th>RENDIMIENTO (%)</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr>
                                                <th>1</th>
                                                <th>100</th>
                                                <th>-</th>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <th>102</th>
                                                <th>2.0</th>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <th>101</th>
                                                <th>-0.98</th>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <th>104</th>
                                                <th>2.97</th>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <th>103</th>
                                                <th>-0.96</th>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>

                                <div>
                                    <p className="max-w-2xl mt-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                        <span className="font-semibold">DATOS DEL GRAFICO</span>

                                        <ul className="list-disc list-inside text-[#FFFFFF]space-y-1 mt-2">
                                            <li><span className="font-semibold">Precios: </span>[100, 102, 101, 104, 103]</li>
                                            <li><span className="font-semibold">Rendimientos: </span>[-, 2.0%, -0.98%, 2.97%, -0.96%]</li>
                                            <li><span className="font-semibold">Nivel de confianza: </span>95%</li>
                                            <li><span className="font-semibold">Inversion: </span>1000</li>
                                        </ul>
                                    </p>
                                </div>

                                <div>
                                    <p className="max-w-2xl font-light text-justify text-[#FFFFFF] md:text-lg lg:text-xl">
                                        <span className="font-semibold">PRECEDIMIENTO</span>

                                        <ul className="list-disc list-inside text-[#FFFFFF]space-y-1 mt-2">
                                            <li><span className="font-semibold">Ordenamos los rendimientos: </span>[-0.98%, -0.96%, 2.0%, 2.97%]</li>
                                            <li><span className="font-semibold">Percentil 5% ≈ </span>-0.98%</li>
                                            <li><span className="font-semibold">VaR (95%)= </span>-0.98% de $1000 = -$9.8</li>
                                        </ul>
                                    </p>
                                </div>

                                <div>
                                    <span className="font-semibold text-justify text-[#FFFFFF] md:text-lg lg:text-xl">INTERPRETACIÓN</span>
                                    <p className="max-w-2xl font-light text-justify text-[#FFFFFF] md:text-lg lg:text-xl mt-2">
                                        "Con un 95% de confianza, tu pérdida máxima en un día no superará $9.8 sobre $1000 invertidos."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Caja verde abajo izquierda */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#FFFFFF] rounded-xl p-4 flex flex-col justify-center shadow-md">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                            3. Ejemplo práctico simple
                        </h3>
                        <SimuladorVaR />
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
                                    1. ¿Qué significa “presupuesto”?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Un plan para administrar ingresos y gastos
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Un ahorro fijo mensual
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Un préstamo bancario
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 2 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    2. ¿Cuál es la diferencia entre ahorro e inversión?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        El ahorro guarda dinero, la inversión lo hace crecer
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        No hay ninguna diferencia
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        El ahorro implica más riesgo que la inversión
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 3 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    3. ¿Qué riesgos financieros pueden afectar a una persona?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Pérdida de empleo
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Endeudamiento excesivo
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Inflación
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 4 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    4. ¿Por qué es importante gestionar los riesgos en las finanzas personales?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Para evitar pérdidas económicas y proteger el futuro
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Para gastar sin preocupaciones
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        No es importante, los riesgos no afectan las finanzas
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

export default HitoVarSimulacion;