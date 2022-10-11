import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const OneProduct = (props) => {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })


    },[])

    return(
        <div>
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            <h1>${product.price}</h1>
            <button onClick={} className="btn btn-danger">Delete Product</button>
            <button onClick={} className="btn btn-warning">Edit Product</button>
        </div>
    )
}

export default OneProduct