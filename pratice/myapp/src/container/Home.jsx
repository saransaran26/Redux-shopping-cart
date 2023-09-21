import React from 'react'
import Header from '../components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Nav from '../components/Nav'
import Nav from '../components/nav'
import ProductList from '../components/ProductList'
import Cart from '../components/cart'
import Checkout from '../components/Checkout'
import Success from '../components/Success'


function Home() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path='/' exact Component={Nav}></Route>
            <Route path='/ProductList/:id' Component={ProductList}></Route>
            <Route path='/cart' Component={Cart}></Route>
            <Route path='/checkout/'>
              <Route path='' Component={Checkout}></Route>
              <Route path=':id' Component={Checkout}></Route>
            </Route>
            <Route path='/success' Component={Success}></Route>
        </Routes>
    </div>
  )
}

export default Home