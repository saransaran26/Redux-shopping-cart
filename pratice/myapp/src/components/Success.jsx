import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate = useNavigate()
    const[count,setCount] = useState(15)
    useEffect(()=>{
        setInterval(() => {
            setCount((count)=>count-1)
        }, 1000)
        setTimeout(()=>navigate('/'),15000)
    },[navigate])
  return (
    <div className='text-center mt-5'>
        <h4>Your Order Have been placed. You Will be redirected in {count} seconds</h4>
        </div>
  )
}

export default Success