import Hitos from "./hitos";
import Carrusel from "../../componentes/carrusel";
import SimuladorPortafolio from "../../componentes/simuladorPortafolio";

import EvaluacionHito from "../../componentes/evaluacionHito";

//hook de desplazamiento:
import useSmoothScroll from "../../hooks/useSmoothScroll";

//Imagenes del carrusel:
import car16 from "../../assets/car-16.jpg";
import car17 from "../../assets/car-17.jpg";
import car18 from "../../assets/car-18.jpg";

const HitoVarPortafolios = () => {

    useSmoothScroll("contenido", 1100);

    const slides = [
        car16,
        car17,
        car18
    ]

    return (
        <div>
            <Hitos />
            <div id="contenido" className="min-h-screen bg-gray-500 p-4 gap-10 m-4 rounded-xl">

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
                        <EvaluacionHito
                            hito="varPortafolios"
                            preguntas={[
                                {
                                    id: "p1",
                                    texto: "¿Qué portafolio tiene menor riesgo de pérdida según el VaR?",
                                    opciones: [
                                        "Conservador",
                                        "Balanceado",
                                        "Agresivo"
                                    ],
                                    correcta: "Conservador"
                                },
                                {
                                    id: "p2",
                                    texto: "¿Por qué el portafolio diversificado (balanceado) ofrece un equilibrio entre riesgo y rendimiento?",
                                    opciones: [
                                        "Porque combina activos de bajo y alto riesgo, reduciendo la volatilidad total",
                                        "Porque siempre garantiza ganancias seguras",
                                        "Porque depende solo de un activo"
                                    ],
                                    correcta: "Porque combina activos de bajo y alto riesgo, reduciendo la volatilidad total"
                                },
                                {
                                    id: "p3",
                                    texto: "¿Cómo cambia el VaR al aumentar el peso de activos de riesgo?",
                                    opciones: [
                                        "Aumenta, indicando mayor posible pérdida",
                                        "Se mantiene igual, sin importar los pesos",
                                        "Disminuye, porque más riesgo siempre es mejor"
                                    ],
                                    correcta: "Aumenta, indicando mayor posible pérdida"
                                },
                                {
                                    id: "p4",
                                    texto: "¿Qué significa que el VaR de un portafolio agresivo sea más alto que el de uno conservador?",
                                    opciones: [
                                        "Que el portafolio agresivo tiene mayor probabilidad de pérdidas extremas",
                                        "Que el portafolio agresivo siempre gana más dinero",
                                        "Que el portafolio conservador no tiene riesgos en absoluto"
                                    ],
                                    correcta: "Que el portafolio agresivo tiene mayor probabilidad de pérdidas extremas"
                                }
                            ]}
                        />

                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoVarPortafolios;