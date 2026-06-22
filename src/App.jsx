import React from 'react'
import Navber from './components/Navber'
import {  Route, Routes } from 'react-router-dom'
import Sclence from './pages/Sclence'
import OurStandards from './pages/OurStandards'
import TheCream from './pages/TheCream'
import Home from './pages/Home'

import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import Success from './pages/Success'

function App() {
  return (
    <>
    <Navber />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/ourstandards' element={<OurStandards />} />
      <Route path='/sclence' element={<Sclence />} />
      <Route path='/thecream' element={<TheCream />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='payment' element={<Payment />} />
      <Route path='success' element={<Success />} />
    </Routes>

    </>
  )
}

export default App