import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CartList from './components/CartList'
import ListProducts from './components/ListProducts'

const App = () => {
  return (
   <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<ListProducts/>}/>
    <Route path='/cart' element={<CartList/>}/>
  </Routes>
</BrowserRouter>


   
   </>
  )
}

export default App

