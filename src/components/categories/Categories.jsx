import React from 'react';
import { Card, CardContent, CircularProgress, Typography } from "@mui/material"
import useAsyncMock from '../../hooks/useAsyncMock';
import categories from '../../mocks/categorias.json'
import { Link } from "react-router-dom"
 

const Categories = () => {
const {data, loading} = useAsyncMock(categories)

    if(loading) return <CircularProgress />


    return ( <div className='container'>
        <Typography variant="h2" >
         Categorias
        </Typography>

     {  data.map((categoria) =>{
       return (
        <Card key ={categoria.id}>
            <CardContent component={Link} to={`/categoria/${categoria.categoria}`}>
               <Typography > {categoria.categoria} </Typography>
            </CardContent>
        </Card>
       )
        })
 }
    </div> );
}



export default Categories;