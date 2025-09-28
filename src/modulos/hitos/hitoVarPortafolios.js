import Hitos from "./hitos";
import Carrusel from "../../componentes/carrusel";
import SimuladorPortafolio from "../../componentes/simuladorPortafolio";

//Imagenes del carrusel:
import car16 from "../../assets/car-16.jpg";
import car17 from "../../assets/car-17.jpg";
import car18 from "../../assets/car-18.jpg";

const HitoVarPortafolios = () => {

    const slides = [
        car16,
        car17,
        car18
    ]

    return (
        <div>
            <Hitos />
            <div className="min-h-screen bg-gray-500 p-4 gap-10 m-4 rounded-xl">

                <section className="bg-black rounded-xl">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">


                        {/* Texto a la izquierda */}


                        <div className="mr-auto place-self-center lg:col-span-7 max-w-[700px]">
                            <h1 className="max-w-2xl mb-4 text-4xl text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                Informacion general
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                <ul className="list-disc text-gray-200 space-y-1 mb-4 pl-6">
                                    <li>Un <span className="font-semibold">portafolio de inversión</span> es el conjunto de activos financieros (acciones, bonos, fondos, etc.) que posee un inversionista.</li>
                                    <li>Su objetivo principal es <span className="font-semibold">diversificar</span> para reducir riesgos y aumentar la posibilidad de obtener rendimientos.</li>
                                    <li>La distribución de activos en un portafolio depende del <span className="font-semibold">perfil del inversionista</span>: tolerancia al riesgo, horizonte temporal y objetivos financieros.</li>
                                    <li>Comparar diferentes portafolios con métricas como el <span className="font-semibold">Valor en Riesgo (VaR)</span> ayuda a entender cómo puede cambiar la exposición al riesgo según el tipo de inversión.</li>
                                </ul>
                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-[#FFFFFF] rounded-xl max-h-[350px] p-4">
                            <Carrusel slides={slides} />
                        </div>
                    </div>
                </section>


                <div className="grid grid-cols-2 grid-rows-[auto auto] gap-4 bg-[#323232] rounded-xl mt-4 p-4 ">

                    {/* espacio arriba izquierda */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-[#FFFFFF] p-4">
                        <div className="bg-black rounded-xl p-4 flex flex-col items-start   ">
                            <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                ACCIONES
                            </h1>
                            <table className="w-full text-[#FFFFFF] border-collapse border border-[#FFFFFF]">
                                <thead className="border border-gray-300 ">
                                    <tr>
                                        <th>PORTAFOLIO</th>
                                        <th>MEDIA (%)</th>
                                        <th>DESVIACION ESTANDAR (%)</th>
                                        <th>VAR (95%)</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <th className="font-light">CONSERVADOR</th>
                                        <th>4</th>
                                        <th>3</th>
                                        <th>-2</th>
                                    </tr>
                                    <tr>
                                        <th>BALANCEADO</th>
                                        <th>7</th>
                                        <th>7</th>
                                        <th>-6</th>
                                    </tr>
                                    <tr>
                                        <th>AGRESIVO</th>
                                        <th>12</th>
                                        <th>15</th>
                                        <th>-14</th>
                                    </tr>
                                </tbody>

                            </table>
                            <p className="max-w-2xl mt-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                    🔎 INTERPREACIONES
                                </h1>
                                <ul className="list-disc list-inside text-[#FFFFFF]space-y-1 mt-2">
                                    <li>
                                        <span className="font-semibold">Riesgo vs. Rendimiento:</span>
                                        <li>El portafolio agresivo tiene el <span className="font-semibold">mayor rendimiento esperado (12%)</span>, pero también la pérdida máxima esperada más alta (-14%).</li>
                                        <li>El portafolio conservador ofrece <span className="font-semibold">poca ganancia (4%)</span>, pero también menor pérdida esperada (-2%).</li>
                                    </li>
                                    <li>
                                        <span className="font-semibold">Desviación estándar como medida de volatilidad:</span>
                                        <li>El agresivo tiene mayor volatilidad (15%), lo que significa que los resultados fluctúan mucho.</li>
                                        <li>El conservador tiene menos volatilidad (3%), sus resultados son más predecibles.</li>
                                    </li>
                                </ul>
                                <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                    EJEMPLO:
                                </h1>
                                Con $1000 invertidos en el portafolio agresivo, el VaR indica que podrías perder hasta $140 en un escenario extremo, mientras que en el conservador solo $20.
                            </p>
                        </div>
                    </div>

                    {/* espacio abajo izquierda */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#FFFFFF] rounded-xl p-4 justify-center shadow-md">
                        <SimuladorPortafolio />
                    </div>


                    {/* Preguntas ocupando toda la segunda columna */}
                    <div className="bg-[#FFFFFF] col-start-2 col-end-3 row-span-2 flex items-center justify-center rounded-xl h-auto p-4">
                        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full">
                            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                                Preguntas de Autoevaluación
                            </h2>

                            {/* Pregunta 1 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    1. ¿Qué portafolio tiene menor riesgo de pérdida según el VaR?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Conservador ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Balanceado
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Agresivo
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 2 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    2. ¿Por qué el portafolio diversificado (balanceado) ofrece un equilibrio entre riesgo y rendimiento?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Porque combina activos de bajo y alto riesgo, reduciendo la volatilidad total ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Porque siempre garantiza ganancias seguras
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Porque depende solo de un activo
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 3 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    3. ¿Cómo cambia el VaR al aumentar el peso de activos de riesgo?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Aumenta, indicando mayor posible pérdida ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Se mantiene igual, sin importar los pesos
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Disminuye, porque más riesgo siempre es mejor
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 4 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    4. ¿Qué significa que el VaR de un portafolio agresivo sea más alto que el de uno conservador?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Que el portafolio agresivo tiene mayor probabilidad de pérdidas extremas ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Que el portafolio agresivo siempre gana más dinero
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Que el portafolio conservador no tiene riesgos en absoluto
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

export default HitoVarPortafolios;