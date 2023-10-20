import { Modal, Typography } from "@mui/material"
import ItemCount from "../common/ItemCount"
import { useContext, useState } from "react"
import { CartContext, useCartContext } from "../../context/CartContext"

const ProductInfo = ({ product, open, setOpen }) => {
   const {id, img, descripcion, nombre, precio} = product
const { addCarrito } = useCartContext()
   const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0)

   const handleClose = () => {
    setOpen(prev => !prev)
   }

   const handleAdd = (cantidad) =>{
    setCantidadEnCarrito(cantidad)
    console.log(cantidad)
    if (cantidad > 0){
        addCarrito({
            id, nombre, img, precio, quantity: cantidad
        })
    };
   }

 

    return (
        <>
        <Modal className="modal" open={open} onClose={handleClose}>
            <div className="modal-content">
               <Typography variant="h4">{nombre}</Typography>
               <Typography variant="body2">{descripcion}</Typography>
               <Typography variant="h6">${precio.toFixed(2)}</Typography>
               <div className="modal-scroll">  
               <Typography variant="body2"></Typography>   
               <ItemCount product={product} initial={cantidadEnCarrito} onAdd={handleAdd}/>
                </div>
            </div>
        </Modal>
        </>
    );
}


export default ProductInfo;