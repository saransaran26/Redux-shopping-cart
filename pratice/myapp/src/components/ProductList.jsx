import React, { useState } from 'react'
import './ProductList.css'
import { useNavigate, useParams } from 'react-router-dom'
import { productlist } from './product'
import {useDispatch, useSelector} from 'react-redux'
import { additem } from './cartSlice'


function ProductList(props) {
    const params = useParams()
    const dispatch = useDispatch()
    const item = productlist.find((element)=>element.id === parseInt(params.id))
    const navigate = useNavigate()
    const[alert,setalert] = useState(false)

    const list = useSelector((state)=>state.cart.list)
    const element = list.find(((items)=>items.id === item.id))

    const handleitem = () => {
        // console.log(props)
        setalert(true)
        setTimeout(()=>setalert(false),3000)
        dispatch(additem(item))
    }
  return (
    <div className='card mt-4 m-3 product'>
        {alert && <span className='alert alert-success'>Item added to cart</span>}
        <div  className='imgs'>
            <img src={item.thumbnail} alt={item.title} height={350} width={380}/>
        </div>
        <div className="card-body">
            <div className="card-title">
                <h4 className='text-center mt-2'>{item.title}</h4>
                <h6 className='text-center mt-2'>Price : ${item.price}</h6>
                <h6 className='text-center mt-2'>Discount : {item.discountPercentage}%</h6>
                <h6 className='text-center mt-2'>Rating : {props.rating}</h6>
            </div>
        </div>
        <div className='buts'>
            {item.stock > 0 ? 
            <>
            <button className='btn btn-success' onClick={()=>navigate(`/checkout/${item.id}`)}>Buy Now</button> 
            {element?.count > 0 ? 
            <button className='btn btn-outline-warning ms-4' onClick={()=>navigate('/cart')}>Go to cart</button>:
            <button className='btn btn-primary ms-4' onClick={handleitem}>Add to Cart</button>}
            
            </> 
            : <button className='btn btn-outline-danger'>out of stock</button>}
        </div>
    </div>
  )
}

export default ProductList