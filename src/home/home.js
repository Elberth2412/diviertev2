import CardInicio from "../componentes/card";
import "../elementos/card.css"

const Home = () => {
    return (
        <div className="card-grid">
            <CardInicio 
                titulo = "HITOS"
                texto = "Visualiza tu progreso a través de objetivos clave, organizados en etapas que facilitan tu aprendizaje y desarrollo."
                imagen="ruta.png"
                ruta = "/hitos"
            />
            <CardInicio 
                titulo = "SIMULADOR"
                texto = "Practica y experimenta en un entorno seguro que te permite aplicar lo aprendido de forma interactiva."
                imagen= "virtual.png"
                ruta = "/simulador"
            />
            <CardInicio 
                titulo = "ESTADISTICAS"
                texto = "Consulta tus métricas y resultados para analizar tu rendimiento y tomar mejores decisiones."
                imagen = "estadistica.png"
                ruta = "/estadisticas"
            />
        </div>
    );
}

export default Home;