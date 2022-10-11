import {useState , useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const UpdateForm = (props) => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setTitle(res.data.title)
                setDescription(res.data.description)
                setPrice(res.data.price)
            }).catch((err)=>console.log(err))
    },[])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`,{
            title,
            description,
            price
        }).then(res=>{
            console.log(res)
            navigate("/all")
        }).catch((err)=>console.log(err))
    }


    return(
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div className='form-group'>
                    <label className="col-sm-1 col-form-label">Title</label>
                    <input className="col-sm-2 col-form" type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label className="col-sm-1 col-form-label">Description</label>
                    <input className="col-sm-2 col-form" type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div>
                    <label className="col-sm-1 col-form-label">Price</label>
                    <input className="col-sm-2 col-form" type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className="col-sm-10 offset-sm-1">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm