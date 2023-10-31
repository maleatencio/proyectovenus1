import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { totalCantidad, carrito } = useCartContext()

  console.log(carrito);

  // console.log(totalCantidad);
    return (
        <div>
         <Link to="/cart" className="material-symbols-outlined" id="shop">
  shopping_bag 
         <Typography>{carrito.products.lenght}</Typography>
     </Link>
        </div>
    );
}



export default CartWidget;
