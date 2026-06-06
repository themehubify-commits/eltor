import React from 'react'
import Navber from './components/Navber'
import {  Route, Routes } from 'react-router-dom'
import Sclence from './pages/Sclence'
import OurStandards from './pages/OurStandards'
import TheCream from './pages/TheCream'
import Home from './pages/Home'
import Practice from './components/Practice'

function App() {
  return (
    <>
    <Navber />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/ourstandards' element={<OurStandards />} />
      <Route path='/sclence' element={<Sclence />} />
      <Route path='/thecream' element={<TheCream />} />
    </Routes>
    {/* <Practice /> */}
    </>
  )
}

export default App