import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Highlights from './pages/Highlights'
import Recent from './pages/Recent'
import International from './pages/International'
import Political from './pages/Political'
import Finance from './pages/Finance'
import Sports from './pages/Sports'
import Articles from './artcls/[aid]/Articles'

function Body() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/highlights' element={<Highlights />} />
        <Route path='/recent' element={<Recent />} />
        <Route path='/international' element={<International />} />
        <Route path='/political' element={<Political />} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/article/:aid' element={<Articles />} />
      </Routes>
    </>
  )
}

export default Body
