import Hitos from "./hitos";
import imgEstadistica from "../../assets/estadistica.png";
import Carrusel from "../../componentes/carrusel";
import EvaluacionHito from "../../componentes/evaluacionHito";

//Imagenes del carrusel:
import car1 from "../../assets/car-1.png";
import car2 from "../../assets/car-2.png";
import car3 from "../../assets/car-3.png";
import car4 from "../../assets/car-4.png";
import car5 from "../../assets/car-5.png";

const HitoConceptosBasicos = () => {

    let slides = [
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
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center items-center">

                        {/* Texto a la izquierda */}
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                Introducción breve
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-justify text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">
                                Las <span className="font-semibold">finanzas personales</span> son el conjunto de decisiones que una persona toma sobre cómo administrar su dinero:
                                ingresos, gastos, ahorro, inversión y manejo de deudas.
                                <br /><br />
                                La <span className="font-semibold">gestión de riesgos</span> es la práctica de identificar y prevenir posibles pérdidas financieras.
                                Comprender estos conceptos básicos ayuda a tomar mejores decisiones y asegurar estabilidad económica.
                            </p>
                        </div>

                        {/* Imagen a la derecha */}
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-[#FFFFFF] rounded-xl h-[350px]">
                            <img className="w-full p-4" src={imgEstadistica} alt="mockup" />
                        </div>

                    </div>
                </section>


                <div className="grid grid-cols-2 grid-rows-[auto auto] gap-4 bg-black rounded-xl mt-4 p-4">

                    {/* Carrusel arriba izquierda */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-[#FFFFFF] p-4 flex items-center">
                        <Carrusel slides={slides} />
                    </div>

                    {/* Caja verde abajo izquierda */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-white rounded-xl p-4 flex flex-col justify-center shadow-md">
                        <div className="bg-black rounded-xl p-4 flex flex-col items-start">
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-4 leading-tight">
                                Ejemplo práctico simple
                            </h1>
                            <p className="text-base md:text-lg xl:text-xl font-light text-justify text-gray-200">
                                Supongamos que una persona gana <span className="font-semibold">$1000</span> al mes.
                            </p>
                            <ul className="list-disc list-inside text-gray-200 space-y-1">
                                <li>
                                    Si gasta <span className="font-semibold">$950</span> y ahorra <span className="font-semibold">$50</span>, tendrá un fondo pequeño para emergencias.
                                </li>
                                <li>
                                    Si invierte parte de ese ahorro, puede generar más ingresos, pero asume un <span className="text-red-600 font-medium">riesgo de pérdida</span>.
                                </li>
                            </ul>
                            <p className="text-base md:text-lg xl:text-xl font-light text-justify text-gray-200">
                                🔑 Esto refuerza la conexión entre <span className="underline">presupuesto</span>, <span className="underline">ahorro</span>, <span className="underline">inversión</span> y <span className="underline">riesgo</span>.
                            </p>
                        </div>
                    </div>


                    {/* Preguntas ocupando toda la segunda columna */}
                    <div className="bg-[#FFFFFF] col-start-2 col-end-3 row-span-2 flex items-center justify-center rounded-xl p-4">
                        <EvaluacionHito
                            hito="conceptosBasicos" // 👈 este será el siguiente hito a desbloquear
                            preguntas={[
                                {
                                    id: "p1",
                                    texto: "¿Qué significa 'presupuesto'?",
                                    opciones: [
                                        "Un plan para administrar ingresos y gastos",
                                        "Un ahorro fijo mensual",
                                        "Un préstamo bancario",
                                    ],
                                    correcta: "Un plan para administrar ingresos y gastos",
                                },
                                {
                                    id: "p2",
                                    texto: "¿Cuál es la diferencia entre ahorro e inversión?",
                                    opciones: [
                                        "El ahorro guarda dinero, la inversión lo hace crecer",
                                        "No hay ninguna diferencia",
                                        "El ahorro implica más riesgo que la inversión",
                                    ],
                                    correcta: "El ahorro guarda dinero, la inversión lo hace crecer",
                                },
                                {
                                    id: "p3",
                                    texto: "¿Qué riesgos financieros pueden afectar a una persona?",
                                    opciones: [
                                        "Pérdida de empleo",
                                        "Endeudamiento excesivo",
                                        "Inflación",
                                    ],
                                    correcta: "Pérdida de empleo", // 👈 aquí puedes decidir si aceptas varias correctas (luego ajustamos)
                                },
                                {
                                    id: "p4",
                                    texto: "¿Por qué es importante gestionar los riesgos en las finanzas personales?",
                                    opciones: [
                                        "Para evitar pérdidas económicas y proteger el futuro",
                                        "Para gastar sin preocupaciones",
                                        "No es importante, los riesgos no afectan las finanzas",
                                    ],
                                    correcta: "Para evitar pérdidas económicas y proteger el futuro",
                                },
                            ]}
                        />
                    </div>
                </div>


            </div>
        </div>
    );
}
export default HitoConceptosBasicos;