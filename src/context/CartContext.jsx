import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)


const CartProvider = ( {children} ) => {
   const [carrito, setCarrito] = useState({ products: [], total:0 })
 

   const addCarrito = (product) =>{
    const isInCart = carrito.products.findIndex((p) => p.id === product.id)
    if (isInCart !== -1){
        const updatedProducts = [...carrito.products];
        const productIndex = updatedProducts.findIndex((p) => p.id === product.id)
        updatedProducts[productIndex].quantity += product.quantity
        setCarrito((prevCarrito) => ({
            ...prevCarrito,
            products: updatedProducts,
            total: prevCarrito.total + product.precio * product.quantity,
        }))
    }else{
        setCarrito((prevCarrito) => ({
            ...prevCarrito,
            products: [...prevCarrito. products, product],
            total: prevCarrito.total + product.precio * product.quantity
        }))
    }
     }

    const borrarDelCarrito = (productId) => {
        const carritoUpdated = carrito.products.filter((product) => product.id !== productId)
        setCarrito((prevCarrito) => ({
            ...prevCarrito,
            products: carritoUpdated,
            total: carritoUpdated.reduce((total, product) => total + product.precio * product.quantity, 0)
        }))
     
    } 
 
    const vaciarCarrito = () =>{
        setCarrito({ products: [], total:0  })
    }
    
    
    const totalCantidad = () => {
       return carrito.products.reduce((total, product) => total + product.quantity, 0);
     };
  
   

    return (
    <CartContext.Provider value = {{ carrito, addCarrito, borrarDelCarrito, vaciarCarrito, totalCantidad }}>
        {children}
    </CartContext.Provider>
    )

 }


export default CartProvider;