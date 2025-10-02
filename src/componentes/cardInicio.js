import { Link } from "react-router-dom";

const CardInicio = ({ titulo, texto, imagen, ruta }) => {

    return (

        <div className="max-w-sm bg-black border border-gray-700 rounded-xl m-4 shadow-sm transition-transform duration-300 hover:scale-105">
            <Link to={ruta}>
                <img className="rounded-xl bg-white w-screen h-[310px] p-5" src={require(`../assets/${imagen}`)} alt={imagen} />
            </Link>
            <div className="p-8">
                <Link to={ruta}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#FFFFFF]">{titulo}</h5>
                </Link>
                <p className="mb-3 font-normal text-justify text-[#FFFFFF]">{texto}</p>

                <Link to={ruta}>
                    <h5 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">VER MAS</h5>
                </Link>
            </div>
        </div>

    );
}

export default CardInicio;