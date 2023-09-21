import React from 'react'
import { productlist } from './product'
import { useNavigate } from 'react-router-dom'

function ProductCard(props) {
    const navigate = useNavigate()
  return (
    <div className='card mt-4 m-3' style={{width:350}} role='button' onClick={()=>navigate(`/ProductList/${props.id}`)}>
        <div  className='imgs'>
            <img src={props.thumbnail} alt={props.title} height={150} width={180}/>
        </div>
        <div className="card-body">
            <div className="card-title">
                <h4 className='text-center mt-2'>{props.title}</h4>
                <h6 className='text-center mt-2'>Price : ${props.price}</h6>
                <h6 className='text-center mt-2'>Discount : {props.discountPercentage}%</h6>
                <h6 className='text-center mt-2'>Rating : {props.rating}</h6>
            </div>
        </div>
        <div className='buts'>
            {props.stock > 0 ? <button className='btn btn-success'>Available</button> : <button className='btn btn-outline-danger'>out of stock</button>}
        </div>
    </div>
  )
}

export default ProductCard