import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllProducts = (props) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allproducts')
        .then((res)=>{
            console.log(res)
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return(
        <div>
            <h2>All Products:</h2>
            {
                products.map((product, index)=>{
                    return <Link to={`/product/${product._id}`}><li key={index}>{product.title}</li></Link>
                })
            }
        </div>
    )
}

export default AllProducts