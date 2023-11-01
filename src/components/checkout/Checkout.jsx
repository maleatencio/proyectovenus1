import { CartContext, useCartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, doc  } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";



const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("")
    const { carrito, vaciarCarrito} = useCartContext(CartContext)

    const { register, handleSubmit } = useForm()

    const comprar = (data) => {
        const pedido = {
            cliente:  data,
            productos: carrito,
            total: carrito.total
        }
        console.log(pedido);

        const pedirRef = collection(db, "pedidos")
        addDoc(pedirRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito()
        })
    }

    if(pedidoId) 
    {
        return (
            <div className="container-checkout">
                <h1>Muchas gracias por tu compra!</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
        
    }

   


    return (
    
    <div className="container-checkout">
    <h1 className="main-title">Contacto</h1>
    <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresa tu correo eléctronico" {...register("email")} />
        <input type="phone" placeholder="Ingresa tu numero de teléfono" {...register("teléfono")} />
        <button className="enviar" type="submit">Enviar</button>
    </form>
 </div>
)
}



export default Checkout;
