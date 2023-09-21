import React from 'react'
import { useNavigate } from 'react-router-dom'

function Reausable(props) {
  const navigate = useNavigate()
  return (
    <>
    <div className='d-flex m-3 align-items-center justify-content-center'>
        <img src={props.thumbnail} alt={props.title} height={150} width={180} className='me-4'/>
        
            <h4 className='text-center mt-2 me-4'>{props.title}</h4>
            <h6 className='text-center mt-2 me-4'>Price : ${props.price}</h6>
            <h6 className='text-center mt-2 me-4'>Discount : {props.discountPercentage}%</h6>
            <h6 className='text-center mt-2 me-4'>Rating : {props.rating}</h6>
            <button className='btn btn-success me-3 butss' onClick={props.decrement}>-</button>
            <p className='me-3 text-center mt-2'>Quantity : {props.count}</p>
            <button className='btn btn-success me-3 butss' onClick={props.increment}>+</button>
            <button className='btn btn-danger me-3 butss' onClick={props.remove}>Remove</button>
</div>

</>
  )
}

export default Reausable