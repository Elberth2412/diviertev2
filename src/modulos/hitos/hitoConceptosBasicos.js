import Hitos from "./hitos";
import imgEstadistica from "../../assets/estadistica.png"
import imgRuta from "../../assets/ruta.png"
import Carousel from "../../componentes/carrusel";

const slides = [imgEstadistica, imgRuta];

const HitoConceptosBasicos = () => {

    return (
        <div>
            <Hitos />
            <div className="h-screen bg-gray-500 h-auto p-4 gap-10 m-4 rounded-xl">

                <section className="bg-black rounded-xl">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl text-[#FFFFFF] font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Payments tool for software companies</h1>
                            <p className="max-w-2xl mb-6 font-light text-[#FFFFFF] lg:mb-8 md:text-lg lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-white rounded-xl">
                            <img className="rounded-xl bg-white w-auto p-5" src={imgEstadistica} alt="mockup"></img>
                        </div>
                    </div>
                </section>

                <div className="relative">
                    <div className="max-w-lg">
                        <Carousel slides={slides} />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default HitoConceptosBasicos;