import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  return (
    <div className='bg-secondary'>
        <h3 className='text-center p-2'>Shopping Cart</h3>
        <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12 d-flex mb-3">
                <button className='btn btn-success me-3' onClick={()=>navigate('/')}>Home</button>
                <input 
                className='form-control'
                type='search'
                placeholder='Search...'
                ></input>
                <button className='btn btn-success ms-3' onClick={()=>navigate('/cart')}>Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Header