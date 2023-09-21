import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../container/Home'

function Index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='*' Component={Home}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default Index