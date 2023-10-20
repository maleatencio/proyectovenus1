import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)


const CartProvider = ( {children} ) => {
   const [carrito, setCarrito] = useState({ products: [], total:0 })
 

   const addCarrito = (product) =>{
    if(carrito.lenght > 0){
        setCarrito((prevCarrito) =>
        ({...prevCarrito, products: [prevCarrito.products, product], total: prevCarrito.total + product.precio}))
    } else {
        setCarrito({products: [product], total: product.precio * product.quantity})
    }
     }

    const borrarDelCarrito = (productId) => {
        const carritoUpdated = carrito.filter(product => product.id !== productId)
        setCarrito(carritoUpdated)
     
    } 
 
    const vaciarCarrito = () =>{
        setCarrito([])
    }
    
    
    
  
   

    return (
    <CartContext.Provider value = {{ carrito, addCarrito, borrarDelCarrito, vaciarCarrito }}>
        {children}
    </CartContext.Provider>
    )

 }


export default CartProvider;