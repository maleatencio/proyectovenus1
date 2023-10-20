import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { carrito } = useCartContext()

    console.log(carrito);
    return (
        <div>
         <Link to="/cart" className="material-symbols-outlined" id="shop">
  shopping_bag 
         <Typography>{carrito.products.length}</Typography>
     </Link>
        </div>
    );
}



export default CartWidget;
