// import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './components/pages/Home'

import Footer from './components/Footer'
import Map2 from './components/pages/Map2'
import Map3 from './components/pages/Map3'


function App() {
  return (
    <>
      <div className="wraper">
       <Navbar />
       
        <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/Map2" element={<Map2 />} /> 
            <Route path="/Map3" element={<Map3 />} /> 

         </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
