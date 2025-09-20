import Hitos from "./hitos";
import Carrusel from "../../componentes/carrusel";
import CalculadoraEstadisticas from "../../componentes/calculadoraEstadisticas";

//Imagenes del carrusel:
import car14 from "../../assets/car-14.jpg";
import car15 from "../../assets/car-15.jpg";

const HitoEstadisticasBasicas = () => {

    const slides = [
        car14,
        car15
    ];

    return (
        <div>
            <Hitos />
            <div className="min-h-screen bg-gray-500 p-4 gap-10 m-4 rounded-xl">

                <section className="bg-black rounded-xl">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                        {/* Texto a la izquierda */}
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                Introducción teórica
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                En el análisis financiero, las estadísticas descriptivas permiten resumir información compleja de los datos en indicadores clave. Entre ellas, la media aritmética y la desviación estándar son fundamentales para comprender tanto el rendimiento promedio de una inversión como el nivel de riesgo que esta conlleva.
                                <br /><br />
                                <ul className="list-disc list-inside text-gray-200 space-y-1">
                                    <li>
                                        La <span className="font-semibold">media </span> nos dice cuál ha sido el rendimiento promedio de un activo en un periodo de tiempo.
                                    </li>
                                    <li>
                                        La <span className="font-semibold">desviacion estandar</span> mide la variabilidad o incertidumbre de esos rendimientos: a mayor desviación, mayor es el riesgo.
                                    </li>
                                </ul>

                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-white rounded-xl">
                            <img className="rounded-xl bg-white w-auto p-5" src={car14} alt="mockup" />
                        </div>

                    </div>
                </section>


                <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-black rounded-xl mt-4 p-4">

                    {/* Carrusel arriba izquierda */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-[#FFFFFF] p-4">
                        <Carrusel slides={slides} />
                    </div>

                    {/* Caja verde abajo izquierda */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#FFFFFF] rounded-xl p-4 flex flex-col justify-center shadow-md">
                        <CalculadoraEstadisticas />
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
                                    1. ¿Qué representa la media en un conjunto de rendimientos financieros?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        El rendimiento promedio ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        La variabilidad de los rendimientos
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        El riesgo de liquidez
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 2 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    2. ¿Qué indica una desviación estándar alta en los rendimientos?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Que el activo es muy estable
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Que existe una alta volatilidad ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        Que la media es baja
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 3 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    3. Si un activo tiene una media positiva pero una desviación estándar muy alta, ¿qué significa?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Que ofrece un buen rendimiento pero con riesgo elevado ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Que siempre dará ganancias seguras
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Que no hay incertidumbre en la inversión
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 4 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    4. ¿Por qué es importante calcular la media y la desviación estándar en finanzas?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Para conocer la rentabilidad y el riesgo de un activo ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Para gastar calcular impuestos
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Para asegurar ganancias garantizadas
                                    </label>
                                </div>
                            </div>

                            <button className="w-full mt-4 bg-black hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg">
                                Enviar respuestas
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoEstadisticasBasicas;