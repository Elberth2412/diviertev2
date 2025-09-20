import Hitos from "./hitos";
import Carrusel from "../../componentes/carrusel";

//Imagenes del carrusel:
import car9 from "../../assets/car-9.jpg";
import car10 from "../../assets/car-10.jpg";
import car11 from "../../assets/car-11.jpg";
import car12 from "../../assets/car-12.jpg";
import car13 from "../../assets/car-13.jpg";

const HitoFactoresRiesgo = () => {

    const slides = [
        car9,
        car10,
        car11,
        car12,
        car13
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
                                Introducción
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                Toda inversión conlleva riesgos. Conocer los principales factores de riesgo ayuda a tomar decisiones más informadas y reducir la probabilidad de pérdidas significativas.
                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-white rounded-xl">
                            <img className="rounded-xl bg-white w-auto p-5" src={car10} alt="mockup" />
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
                                Introducción
                            </h1>
                            <p className="text-base md:text-lg xl:text-xl font-light text-justify text-gray-200">
                                Toda inversión conlleva riesgos. Conocer los principales factores de
                                riesgo ayuda a tomar decisiones más informadas y reducir la probabilidad
                                de pérdidas significativas.
                            </p>
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
                                    3. ¿Qué tipo de riesgo se presenta si un activo no se puede vender fácilmente?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Riesgo de crédito
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Riesgo de liquidez ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        Riesgo de inflación
                                    </label>
                                </div>
                            </div>

                            {/* Pregunta 4 */}
                            <div className="mb-6">
                                <p className="font-medium text-gray-700 mb-2">
                                    4. ¿Qué riesgo afecta a los inversionistas cuando un gobierno cambia sus políticas económicas o regulatorias?
                                </p>
                                <div className="space-y-2">
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Riesgo político/regulatorio ✅
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Riesgo de inflación
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="riesgos" className="mr-2" />
                                        Riesgo de mercado
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

export default HitoFactoresRiesgo;