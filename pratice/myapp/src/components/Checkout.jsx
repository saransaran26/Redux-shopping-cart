import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Reausable from './Reausable'
import { modifyItem, removeItem } from './cartSlice'
import { productlist } from './product'
import { useNavigate, useParams } from 'react-router-dom'

function Checkout() {
    const params = useParams()
  const list = useSelector((state)=>state.cart.list)
  const[state,setstate] = useState(params.id ? [
    {
        ...productlist.find((ele)=>ele.id === parseInt(params.id)),count:1,
    }
  ]:list)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const increment = (items) => {
    const index = state.findIndex(
        (product)=>product.id === items.id
    )
    setstate((state)=>[
        ...state.slice(0,index),
        {...items,count:items.count+1},
        ...state.slice(index+1)
    ])
    
  }

  const decrement = (items) => {
    if(items.count === 1){
      remove(items)
    }
    else{
        const index = state.findIndex(
            (product)=>product.id === items.id
        )
        setstate((state)=>[
            ...state.slice(0,index),
            {...items,count:items.count-1},
            ...state.slice(index+1)
        ])
    }
    
  }

  const remove = (items) =>{
    const index = state.findIndex(
        (product)=>product.id === items.id
    )
    setstate((state)=>[
        ...state.slice(0,index),
        ...state.slice(index+1)
    ])
  }
  return (
    <>
    {/* <h1>phone is : {list[0].title}</h1> */}
    {state.length > 0 ? (
      <>
      {state.map((items)=>(
      <Reausable {...items} key={items.id} increment={()=>increment(items)}
      decrement={()=>decrement(items)}
      remove={()=>remove(items)}
      />
    ))}
    <div className='goto'>
    <button className='btn btn-success mt-3' onClick={()=>navigate('/success')}>Place Order</button>
    </div>
    </>
    )
     : <h1 className='text-center mt-5'>No Items in Checkout</h1>}
    </>
  )
}

export default Checkout