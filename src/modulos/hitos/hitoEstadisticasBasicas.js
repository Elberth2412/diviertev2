import Hitos from "./hitos";
import Carrusel from "../../componentes/carrusel";
import CalculadoraEstadisticas from "../../componentes/calculadoraEstadisticas";
import EvaluacionHito from "../../componentes/evaluacionHito";

//hook de desplazamiento:
import useSmoothScroll from "../../hooks/useSmoothScroll";

//Imagenes del carrusel:
import car14 from "../../assets/car-14.jpg";
import car15 from "../../assets/car-15.jpg";
import estadis from "../../assets/estadisticaBasica.jpg";

const HitoEstadisticasBasicas = () => {

    useSmoothScroll("contenido", 1100);

    const slides = [
        car14,
        car15
    ];

    return (
        <div>
            <Hitos />
            <div id="contenido" className="min-h-screen bg-gray-500 p-4 gap-10 m-4 rounded-xl">

                <section className="bg-black rounded-xl">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">

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
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-[#FFFFFF] rounded-xl h-[350px]">
                            <img className="w-full p-4" src={estadis} alt="mockup" />
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
                        <EvaluacionHito
                            hito="mediaDesviacionEstandar"
                            preguntas={[
                                {
                                    id: "p1",
                                    texto: "¿Qué representa la media en un conjunto de rendimientos financieros?",
                                    opciones: [
                                        "El rendimiento promedio",
                                        "La variabilidad de los rendimientos",
                                        "El riesgo de liquidez"
                                    ],
                                    correcta: "El rendimiento promedio"
                                },
                                {
                                    id: "p2",
                                    texto: "¿Qué indica una desviación estándar alta en los rendimientos?",
                                    opciones: [
                                        "Que el activo es muy estable",
                                        "Que existe una alta volatilidad",
                                        "Que la media es baja"
                                    ],
                                    correcta: "Que existe una alta volatilidad"
                                },
                                {
                                    id: "p3",
                                    texto: "Si un activo tiene una media positiva pero una desviación estándar muy alta, ¿qué significa?",
                                    opciones: [
                                        "Que ofrece un buen rendimiento pero con riesgo elevado",
                                        "Que siempre dará ganancias seguras",
                                        "Que no hay incertidumbre en la inversión"
                                    ],
                                    correcta: "Que ofrece un buen rendimiento pero con riesgo elevado"
                                },
                                {
                                    id: "p4",
                                    texto: "¿Por qué es importante calcular la media y la desviación estándar en finanzas?",
                                    opciones: [
                                        "Para conocer la rentabilidad y el riesgo de un activo",
                                        "Para gastar calcular impuestos",
                                        "Para asegurar ganancias garantizadas"
                                    ],
                                    correcta: "Para conocer la rentabilidad y el riesgo de un activo"
                                }
                            ]}
                        />

                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoEstadisticasBasicas;