import { Card, CardContent, Grid, Typography } from "@mui/material";
import ProductInfo from "./ProductInfo";
import { useState } from "react";


const ProductDetail = ({product, children}) => {
    const {id, img, nombre, precio} = product
  
    const [isSelected, setIsSelected] = useState(false);
    
    

    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }

    return ( <>
    <Grid item key ={id} xs={ 8} sm={1} md={8} lg={0}>
        <Card className="card-product-container" onClick={handleClick}>
            <img src={img}/>
            <CardContent>
                <Typography>{nombre}</Typography>
                <Typography>${precio}</Typography>
            </CardContent>
        </Card>

    </Grid>
    {
        isSelected && 
    <ProductInfo product={product} open={isSelected} setOpen={setIsSelected}/>
     }
</>
    );
}



export default ProductDetail;