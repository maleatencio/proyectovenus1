import { useParams } from "react-router-dom";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import { CircularProgress, Grid } from "@mui/material";
import ProductDetail from "../products/ProductDetail"
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const CategoriesProductList = () => {
    const { categoriaId } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
   
       const querySnapshot = query(collection(db, "products"), where("categoria", "==",`${categoriaId}`) )
        getDocs(querySnapshot).then((snapshot)=>{
            if(snapshot.size === 0){
                console.log("no result");
            }
            setData(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            setLoading(false)
        })
        
    }, [])

    if (loading) return <CircularProgress />

    const categorySelected = data.filter ( categoria => categoria.categoria === categoriaId)
    return ( <div>
        <Grid container spacing={3}>
            {data.map((product)=> {
              return <ProductDetail key={product.id} product={product} />
            })}
        </Grid>
    </div>

    );

        }

    

export default CategoriesProductList;