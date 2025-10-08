import Hitos from "./hitos";
import SimuladorVaR from "../../componentes/simuladorVAR";
import EvaluacionHito from "../../componentes/evaluacionHito";

//hook de desplazamiento:
import useSmoothScroll from "../../hooks/useSmoothScroll";

//Imagenes del carrusel:
import car1 from "../../assets/car-1.png";

const HitoVarSimulacion = () => {

    useSmoothScroll("conuenido", 1100);

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

                                        <ul className="list-disc list-inside text-[#FFFFFF] space-y-1 mt-2">
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
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-[#FFFFFF] rounded-xl p-4 flex flex-col justify-center shadow-2xl">
                        <SimuladorVaR />
                    </div>


                    {/* Preguntas ocupando toda la segunda columna */}
                    <div className="bg-[#FFFFFF] col-start-2 col-end-3 row-span-2 flex items-center justify-center rounded-xl">
                        <EvaluacionHito
                            hito="varSimulacion"
                            preguntas={[
                                {
                                    id: "p1",
                                    texto: "¿Qué mide el Valor en Riesgo (VaR)?",
                                    opciones: [
                                        "La ganancia máxima que un activo puede tener.",
                                        "La pérdida máxima esperada en un horizonte y nivel de confianza dado.",
                                        "La rentabilidad promedio de un activo."
                                    ],
                                    correcta: "La pérdida máxima esperada en un horizonte y nivel de confianza dado."
                                },
                                {
                                    id: "p2",
                                    texto: "¿Por qué es importante usar un horizonte temporal en el VaR?",
                                    opciones: [
                                        "Para ajustar la estimación de riesgo según el periodo de inversión.",
                                        "Porque el horizonte no afecta el cálculo.",
                                        "Porque siempre se calcula a 1 día sin importar el caso."
                                    ],
                                    correcta: "Para ajustar la estimación de riesgo según el periodo de inversión."
                                },
                                {
                                    id: "p3",
                                    texto: "¿Qué ocurre si el dataset de precios históricos es muy pequeño?",
                                    opciones: [
                                        "El VaR será más preciso.",
                                        "El VaR puede no reflejar riesgos reales y dar valores engañosos.",
                                        "No importa la cantidad de datos, siempre se obtiene el mismo VaR."
                                    ],
                                    correcta: "El VaR puede no reflejar riesgos reales y dar valores engañosos."
                                },
                                {
                                    id: "p4",
                                    texto: "¿Cómo se interpreta un VaR del 95% de 2% en un horizonte de 10 días?",
                                    opciones: [
                                        "Con 95% de confianza, la pérdida máxima en 10 días no superará el 2%.",
                                        "Con 95% de confianza, la ganancia mínima será del 2%.",
                                        "Se garantiza que la inversión siempre tendrá un retorno del 2%."
                                    ],
                                    correcta: "Con 95% de confianza, la pérdida máxima en 10 días no superará el 2%."
                                }
                            ]}
                        />

                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoVarSimulacion;