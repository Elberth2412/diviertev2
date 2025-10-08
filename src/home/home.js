import CardInicio from "../componentes/cardInicio";
import "../elementos/card.css"

const Home = () => {
    return (
        <div className= "bg-gray-500 rounded-xl p-4 m-4">
            <div className="grid grid-cols-3 gap-12 justify-items-center items-streech bg-[#FFFFFF] rounded-xl pl-12 pr-12 p-8">
                <CardInicio
                    titulo="HITOS"
                    texto="Visualiza tu progreso a través de objetivos clave, organizados en etapas que facilitan tu aprendizaje y desarrollo."
                    imagen="ruta.png"
                    ruta="/hitos"
                />
                <CardInicio
                    titulo="SIMULADOR"
                    texto="Practica y experimenta en un entorno seguro que te permite aplicar lo aprendido de forma interactiva."
                    imagen="virtual.png"
                    ruta="/simulador"
                />
                <CardInicio
                    titulo="ESTADISTICAS"
                    texto="Consulta tus métricas y resultados para analizar tu rendimiento y tomar mejores decisiones."
                    imagen="estadistica.png"
                    ruta="/estadisticas"
                />
            </div>
        </div>
    );
}

export default Home;