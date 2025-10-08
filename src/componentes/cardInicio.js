import { Link } from "react-router-dom";

const CardInicio = ({ titulo, texto, imagen, ruta }) => {

    return (

        <div className="bg-white shadow-xl border border-gray-300 rounded-xl shadow-sm transition-transform duration-300 hover:shadow-2xl hover:scale-105">
            <Link to={ruta}>
                <img className="rounded-xl bg-[#FFFFFF] w-screen h-[350px] p-10 border border-gray-300" src={require(`../assets/${imagen}`)} alt={imagen} />
            </Link>
            <div className="flex flex-col p-8 bg-[#FFFFFF] text-[#000000] rounded-xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{titulo}</h5>
                <p className="font-normal text-justify ">{texto}</p>
            </div>
        </div>

    );
}
export default CardInicio;