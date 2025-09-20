import Hitos from "./hitos";
import Carrusel from "../../componentes/carrusel";

//Imagenes del carrusel:
import car1 from "../../assets/car-1.png";
import car2 from "../../assets/car-2.png";
import car3 from "../../assets/car-3.png";
import car4 from "../../assets/car-4.png";
import car5 from "../../assets/car-5.png";

const HitoRendimientoHistorico = () => {

    const slides = [
        car1,
        car2,
        car3,
        car4,
        car5
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
                                Introducción breve
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                El análisis del <span className="font-semibold">rendimiento histórico</span> permite comparar distintos activos financieros (acciones, bonos, divisas, criptomonedas, etc.) a lo largo del tiempo.
                                <br /><br />
                                Esto ayuda a responder preguntas como:
                                <ul className="list-disc list-inside text-gray-200 space-y-1 mt-2">
                                    <li>¿Cuál activo tuvo el mejor <span className="font-semiblod">desempeño</span> en un periodo específico?</li>
                                    <li>¿Cuál presenta mayor <span className="font-semibold">estabilidad</span> o riesgo?</li>
                                    <li>¿Cómo se <span className="font-semibold">comporta</span> un activo frente a otros en diferentes contextos del mercado?</li>
                                </ul>
                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-white rounded-xl">
                            <img className="rounded-xl bg-white w-auto p-5" src={car1} alt="mockup" />
                        </div>

                    </div>
                </section>


                <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-black rounded-xl mt-4 p-4">

                    {/* Carrusel arriba izquierda */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-[#FFFFFF] p-4">
                        <table className="w-full  flex justify-center">
                            <tr>
                                <td>Fecha</td>
                                <td>Accion A</td>
                                <td>Accion B</td>
                                <td>Bono</td>
                            </tr>
                            
                        </table>
                    </div>

                    {/* Caja verde abajo izquierda */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#FFFFFF] rounded-xl p-4 flex flex-col justify-center shadow-md">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                            3. Ejemplo práctico simple
                        </h3>
                        <p className="text-gray-700 mb-2">
                            Supongamos que una persona gana <span className="font-semibold">$1000</span> al mes.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>
                                Si gasta <span className="font-semibold">$950</span> y ahorra <span className="font-semibold">$50</span>, tendrá un fondo pequeño para emergencias.
                            </li>
                            <li>
                                Si invierte parte de ese ahorro, puede generar más ingresos, pero asume un <span className="text-red-600 font-medium">riesgo de pérdida</span>.
                            </li>
                        </ul>
                        <p className="mt-3 text-gray-800 font-medium">
                            🔑 Esto refuerza la conexión entre <span className="underline">presupuesto</span>, <span className="underline">ahorro</span>, <span className="underline">inversión</span> y <span className="underline">riesgo</span>.
                        </p>
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
                                    1. 
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
 
export default HitoRendimientoHistorico;