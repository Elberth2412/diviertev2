import Hitos from "./hitos";
import imgEstadistica from "../../assets/estadistica.png";
import Carrusel from "../../componentes/carrusel";

//imagenes:
import car6 from "../../assets/car-6.jpg";
import car7 from "../../assets/car-7.jpg";
import car8 from "../../assets/car-8.jpg";

const HitoValorRiesgo = () => {

    let slides = [
        car6,
        car7,
        car8
    ];

    return (
        <div>
            <Hitos />
            <div className="min-h-screen bg-gray-500 p-4 gap-10 m-4 rounded-xl">

                <section className="bg-black rounded-xl">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">

                        {/* Texto a la izquierda */}
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                Introducción teórica (definición + fórmula)
                            </h1>
                            <p className="max-w-2xl mb-4 font-light text-justify text-[#FFFFFF] lg:mb-2 md:text-lg lg:text-xl">
                                El <span className="font-semibold">Valor en Riesgo (VaR)</span> es una medida estadística que estima la pérdida máxima esperada en una inversión o portafolio durante un período de tiempo determinado y con un nivel de confianza específico.
                                <br /><br />
                            </p>
                            <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                Ejemplo fórmula simplificada:
                            </h1>
                            <p className="max-w-2xl mb-4 font-light text-center text-[#FFFFFF] lg:mb-2 md:text-lg lg:text-xl">
                                VaR=(MediadeRetornos−Z×σ)×ValordelaInversion
                            </p>
                            <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                Donde:
                            </h1>
                            <p className="max-w-2xl mb-4 font-light text-center text-[#FFFFFF] lg:mb-2 md:text-lg lg:text-xl">
                                <ul>
                                    <li><span className="font-semibold">Media</span> = rendimiento promedio.</li>
                                    <li><span className="font-semibold">σ (sigma)</span> = volatilidad (desviación estándar).</li>
                                    <li><span className="font-semibold">Z</span> = factor asociado al nivel de confianza (ej. 1.65 para 95%).</li>
                                </ul>
                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-[#FFFFFF] rounded-xl h-[350px]">
                            <img className="w-full p-4" src={imgEstadistica} alt="mockup" />
                        </div>

                    </div>
                </section>


                <div className="grid grid-cols-2 grid-rows-2 gap-4 bg-black rounded-xl mt-4 p-4">

                    {/* Carrusel arriba izquierda */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-[#FFFFFF] p-4">
                        <Carrusel slides={slides} />
                    </div>

                    {/* Caja verde abajo izquierda */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-white rounded-xl p-4 flex flex-col justify-center shadow-md">
                        <div className="bg-black rounded-xl p-4 flex flex-col items-start   ">
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-4 leading-tight">
                                Ejemplo práctico
                            </h1>
                            <ul className="list-disc list-inside text-gray-200 space-y-1">
                            <li>
                                Una inversión de $10,000 con una volatilidad de 2% diaria, al 95% de confianza, podría tener un VaR diario = $330.
                            </li>
                            <li>
                               Esto significa: con un 95% de probabilidad, la pérdida máxima en un día no superará los $330
                            </li>
                        </ul>
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
                                    1. ¿Qué riesgo afecta a una inversión si los precios caen repentinamente en la bolsa?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Riesgo de mercado
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Riesgo de liquidez
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="presupuesto" className="mr-2" />
                                        Riesgo político
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 2 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    2. ¿Qué sucede si la inflación supera la rentabilidad de una inversión?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        El poder adquisitivo disminuye ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        La inversión se vuelve más líquida
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="ahorro" className="mr-2" />
                                        El riesgo de mercado aumenta
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 3 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    3. ¿Qué nivel de confianza se usa comúnmente en VaR?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        99%
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        95%
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        90%
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 4 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    4. ¿En qué contextos se utiliza el VaR?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Bancos para calcular reservas de capital
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Inversores individuales para evaluar riesgos
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Empresas para planificar decisiones financieras
                                    </label>
                                </div>
                            </div>

                            <button className="w-full mt-4 bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg">
                                Enviar respuestas
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoValorRiesgo;