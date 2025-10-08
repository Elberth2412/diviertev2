import Hitos from "./hitos";
import Carrusel from "../../componentes/carrusel";
import VarEscenarios from "../../componentes/varEscenarios";

import EvaluacionHito from "../../componentes/evaluacionHito";

//hook de desplazamiento:
import useSmoothScroll from "../../hooks/useSmoothScroll";

//Imagenes del carrusel:
import car1 from "../../assets/car-1.png";
import car2 from "../../assets/car-2.png";
import car3 from "../../assets/car-3.png";
import car4 from "../../assets/car-4.png";
import car5 from "../../assets/car-5.png";

const HitoVarInterpretacion = () => {

    useSmoothScroll("contenido", 1100);

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
            <div id="contenido" className="min-h-screen bg-gray-500 p-4 gap-10 m-4 rounded-xl">

                <section className="bg-black rounded-xl">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center">

                        {/* Texto a la izquierda */}
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                Introducción breve
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                El <span className="font-semibold">Valor en Riesgo (VaR)</span> no es único ni fijo. Cambia según el escenario del mercado:
                                <br /><br />
                                <ul className="list-disc list-inside text-gray-200 space-y-1 mb-4">
                                    <li><span className="font-semibold">Escenario optimista:</span> refleja un entorno con baja volatilidad. El VaR será más pequeño (poca pérdida esperada).</li>
                                    <li><span className="font-semibold">Escenario conservador:</span> es el escenario base o promedio. Aquí el VaR refleja un riesgo estándar.</li>
                                    <li><span className="font-semibold">Escenario pesimista:</span> asume un mercado muy volátil o crisis financiera. El VaR aumenta y refleja mayores pérdidas posibles.</li>
                                </ul>
                                <h1 className="mb-4 text-xs text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-3xl">
                                    Objetivo
                                </h1>
                                Aprender que el VaR no debe verse de manera aislada, sino en relación con distintos contextos del mercado, para mejorar la toma de decisiones financieras.
                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-[#FFFFFF] rounded-xl h-[350px]">
                            <img className="w-full p-4" src={car1} alt="mockup" />
                        </div>

                    </div>
                </section>


                <div className="grid grid-cols-2 gap-4 bg-black rounded-xl mt-4 p-4">

                    {/*izquierda */}
                    <div className="col-start-1 col-end-2 row-end-2 rounded-xl bg-[#FFFFFF] p-4">
                        <VarEscenarios />
                    </div>


                    {/* Preguntas derecha*/}
                    <div className="bg-[#FFFFFF] col-start-2 col-end-3 flex items-center justify-center rounded-xl">
                        <EvaluacionHito
                            hito="varInterpretacion"
                            preguntas={[
                                {
                                    id: "p1",
                                    texto: "¿En qué escenario el riesgo se vuelve inaceptable?",
                                    opciones: [
                                        "Cuando la pérdida es pequeña y controlada.",
                                        "Cuando la pérdida supera el nivel que estoy dispuesto a asumir.",
                                        "Nunca, porque toda inversión es segura."
                                    ],
                                    correcta: "Cuando la pérdida supera el nivel que estoy dispuesto a asumir."
                                },
                                {
                                    id: "p2",
                                    texto: "¿Te sentirías cómodo invirtiendo si la pérdida máxima posible es -30%?",
                                    opciones: [
                                        "Sí, porque podría recuperar en el futuro.",
                                        "No, porque supera mi tolerancia al riesgo.",
                                        "No importa, el rendimiento siempre compensa la pérdida."
                                    ],
                                    correcta: "No, porque supera mi tolerancia al riesgo."
                                },
                                {
                                    id: "p3",
                                    texto: "¿Qué escenario se parece más a las condiciones actuales del mercado?",
                                    opciones: [
                                        "Escenario optimista.",
                                        "Escenario conservador.",
                                        "Escenario pesimista."
                                    ],
                                    correcta: "Escenario conservador."
                                },
                                {
                                    id: "p4",
                                    texto: "¿Por qué es importante analizar el VaR en varios escenarios (optimista, conservador, pesimista)?",
                                    opciones: [
                                        "Para entender mejor cómo cambia el riesgo en distintos contextos.",
                                        "Para complicar innecesariamente los cálculos.",
                                        "Porque los tres escenarios siempre dan el mismo resultado."
                                    ],
                                    correcta: "Para entender mejor cómo cambia el riesgo en distintos contextos."
                                }
                            ]}
                        />

                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoVarInterpretacion;