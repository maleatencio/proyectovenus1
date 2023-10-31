import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography  } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { carrito, borrarDelCarrito, vaciarCarrito } = useCartContext()

    const handleRemove = ( id, cantidad ) => {
        console.log(cantidad);
        if(cantidad > 0){
            borrarDelCarrito(id)

        }
    
       }

       const handleVaciar = () =>{
        vaciarCarrito();
        console.log(carrito);
       }
    
    return(
   
    <div className="carrito-container">
      
        {carrito.total === 0 ? (
            <Typography variant="h4" component="div" align="center" sx={{ p: 2}}>
                Carrito vacío
            </Typography>
            
        ) : (
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                       <TableCell>Producto</TableCell>
                        <TableCell>Cantidad</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody> 
                {carrito.products.map(( product, cantidad ) => (
                                    <TableRow key={product.id}>
                                        <TableCell> <IconButton size="small" onClick={() => handleRemove(product.id)}>
                                       <CancelIcon fontSize="small" />  </IconButton ></TableCell>
                                        <TableCell vertical-align="center"><img style={{ width: "10%", height: "10%" }} src={product.img} alt={product.nombre} /> <Typography variant="p"> {product.nombre} </Typography></TableCell>
                                        <TableCell>{product.quantity}</TableCell>
                                        <TableCell>${product.precio}</TableCell>
                                        <TableCell>${product.precio * product.quantity}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={4}>Total:</TableCell>
                                    <TableCell>${carrito.total.toFixed(2)}</TableCell>
                                     </TableRow>
                                     
                                     <TableCell align="center"><Link to="/checkout">Finalizar compra</Link></TableCell>
                                     
                            </TableBody>
                        </Table>
                        <Button align="center" onClick={handleVaciar} color="secondary">Vaciar carrito</Button>
                    </TableContainer> 
                 )}
                 
                    


    </div> 
    
    );

}



export default Cart;