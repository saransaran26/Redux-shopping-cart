import React from 'react'
import { productlist } from './product'
import ProductCard from './ProductCard'

function Nav() {
  return (
    <div className='d-flex flex-wrap justify-content-center m-4'>
      {productlist.map((product)=><ProductCard {...product} key={product.id}></ProductCard> )}
    </div>
  )
}

export default Nav