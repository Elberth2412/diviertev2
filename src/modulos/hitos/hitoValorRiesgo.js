import Hitos from "./hitos";
import imgEstadistica from "../../assets/estadistica.png";
import Carrusel from "../../componentes/carrusel";
import EvaluacionHito from "../../componentes/evaluacionHito";

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


                <div className="grid grid-cols-2 grid-rows-[auto auto] gap-4 bg-black rounded-xl mt-4 p-4">

                    {/* Carrusel arriba izquierda */}
                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-[#FFFFFF] p-4 flex items-center">
                        <Carrusel slides={slides} />
                    </div>

                    {/* Caja verde abajo izquierda */}
                    <div className="col-start-1 col-end-2 row-start-2 row-end-3 bg-white rounded-xl p-4 flex flex-col justify-center shadow-md">
                        <div className="bg-black rounded-xl p-4 flex flex-col items-start">
                            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-2 leading-tight">
                                RIESGOS:
                            </h1>
                            <p className="max-w-2xl mt-2 pl-4 font-light text-justify text-[#FFFFFF] md:text-lg lg:text-xl">
                                <ul className=" text-[#FFFFFF] space-y-1 mt-2">
                                    <li>
                                        <span className="font-semibold">Riesgo de mercado:</span>
                                        <ul className="list-disc text-[#FFFFFF] space-y-1">
                                            <li className="pl-4">Es la posibilidad de perder dinero debido a fluctuaciones en los precios de los activos financieros (acciones, bonos, divisas, materias primas, etc.).</li>
                                            <li className="pl-4">Ejemplo: si compras acciones de una empresa a $100 y, por una caída general en la bolsa, ahora valen $80, estás enfrentando riesgo de mercado.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-semibold">Riesgo de liquidez:</span>
                                        <ul className="list-disc text-[#FFFFFF] space-y-1">
                                            <li className="pl-4">Se da cuando no puedes vender un activo sin afectar su precio.</li>
                                            <li className="pl-4">Ejemplo: si tienes un terreno en una zona poco demandada, podrías tardar meses en venderlo, incluso bajando el precio.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-semibold">Riesgo político:</span>
                                        <ul className="list-disc text-[#FFFFFF] space-y-1">
                                            <li className="pl-4">Se refiere a la incertidumbre causada por cambios en el entorno político o regulatorio que afectan a las inversiones.</li>
                                            <li className="pl-4">Ejemplo: una nacionalización de empresas, un cambio brusco en las reglas de impuestos, o restricciones a la inversión extranjera.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>


                    {/* Preguntas ocupando toda la segunda columna */}
                    <div className="bg-[#FFFFFF] col-start-2 col-end-3 row-span-2 flex items-center justify-center rounded-xl p-4">
                        <EvaluacionHito
                            hito="valorRiesgo" // 👈 este será el siguiente hito a desbloquear
                            preguntas={[
                                {
                                    id: "p1",
                                    texto: "¿Qué riesgo afecta a una inversión si los precios caen repentinamente en la bolsa?",
                                    opciones: [
                                        "Riesgo de mercado",
                                        "Riesgo de liquidez",
                                        "Riesgo político",
                                    ],
                                    correcta: "Riesgo de mercado",
                                },
                                {
                                    id: "p2",
                                    texto: "¿Qué sucede si la inflación supera la rentabilidad de una inversión?",
                                    opciones: [
                                        "El poder adquisitivo disminuye",
                                        "La inversión se vuelve más líquida",
                                        "El riesgo de mercado aumenta",
                                    ],
                                    correcta: "El poder adquisitivo disminuye",
                                },
                                {
                                    id: "p3",
                                    texto: "¿Qué nivel de confianza se usa comúnmente en VaR?",
                                    opciones: ["99%", "95%", "90%"],
                                    correcta: "95%",
                                },
                                {
                                    id: "p4",
                                    texto: "¿En qué contextos se utiliza el VaR?",
                                    opciones: [
                                        "Bancos para calcular reservas de capital",
                                        "Inversores individuales para evaluar riesgos",
                                        "Empresas para planificar decisiones financieras",
                                    ],
                                    correcta: "Bancos para calcular reservas de capital",
                                },
                            ]}

                        />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoValorRiesgo;