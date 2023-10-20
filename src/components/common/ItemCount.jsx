import { useState } from "react";

const ItemCount = ( {product, initial, onAdd} ) => {

    const [cantidad, setCantidad] = useState(initial)
    const handleRestar = () => {
       cantidad > initial && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < product.stock && setCantidad(cantidad + 1)
    }

    const handleAdd  = () => {
        cantidad > 0 && onAdd(cantidad)
    }
    


    return <div>
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="agregar-carrito" onClick={handleAdd}>Agregar al carrito</button>
    </div>;
}


export default ItemCount;