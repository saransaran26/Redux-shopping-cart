import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Reausable from './Reausable'
import { modifyItem, removeItem } from './cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const list = useSelector((state)=>state.cart.list)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const increment = (items) => {
    dispatch(modifyItem({...items,count:items.count+1}))
  }

  const decrement = (items) => {
    if(items.count === 1){
      dispatch(removeItem(items))
    }
    else{
      dispatch(modifyItem({...items,count:items.count-1}))
    }
    
  }

  const remove = (items) =>{
    dispatch(removeItem(items))
  }
  return (
    <>
    {/* <h1>phone is : {list[0].title}</h1> */}
    {list.length > 0 ? (
      <>
      {list.map((items)=>(
      <Reausable {...items} key={items.id} increment={()=>increment(items)}
      decrement={()=>decrement(items)}
      remove={()=>remove(items)}
      />
    ))}
    <div className='goto'>
    <button className='btn btn-success mt-3' onClick={()=>navigate('/checkout')}>Go to checkout</button>
    </div>
    </>
    )
     : <h1 className='text-center mt-5'>No Items in Cart</h1>}
    </>
  )
}

export default Cart