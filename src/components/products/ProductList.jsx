import { CircularProgress, Grid, Typography } from '@mui/material'
import useAsynckMock from '../../hooks/useAsyncMock'
import products from '../../mocks/products.json'
import ProductDetail from './ProductDetail'
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ProductList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'))
        const newData = querySnapshot.docs.map((doc) =>({id: doc.id, ...doc.data()}))
      setData(newData)
      setLoading(false)
      
    }
    fetchData()
    
        }, [])

    if(loading) return <CircularProgress />
    return ( <div className='container'>
        <Typography variant= 'h2'  >
           Productos
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((product) =>{
                    return(
                        <ProductDetail key={product.id} product={product}> 
                        </ProductDetail>
                    )
                })
            }
        </Grid>
    </div>
         
    );
}



export default ProductList;