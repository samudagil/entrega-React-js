import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import listaProductos from "../data";
import "./Productos.css";
import ItemCount from '../components/ItemCount'

function DetalleProducto(){

    const {productoId} = useParams();

    const producto = listaProductos.find((producto) => producto.id == productoId);
    
    const {image, title, price, description} = producto
    return (
    <div>
        <h1>Detalle Producto</h1>
        <div className="galeria">
            <img src={image} />
            <h2>{title}</h2>
            <h3>{description}</h3>
            <p>Precio: ${price}</p>
            <ItemCount initializaValue={1} stock={10} />
        <Link to="/productos">Volver</Link>
        </div>
    </div>
    )
}

export default DetalleProducto