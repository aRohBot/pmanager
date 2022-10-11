import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate} from 'react-router-dom'

const OneProduct = (props) => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then((res)=>{
                navigate('/all')
                removeFromDom(id)
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            <h1>${product.price}</h1>
            <button onClick={(e)=>deleteHandler(product._id)} className="btn btn-danger">Delete Product</button>
            <Link to={`/product/edit/${id}`}><button className="btn btn-warning">Edit Product</button></Link>
        </div>
    )
}

export default OneProduct