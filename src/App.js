// import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './components/pages/Home'

import Footer from './components/Footer'


function App() {
  return (
    <>
      <div className="wraper">
       <Navbar />
       <Home/>
        {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> */}
        {/* </Routes> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default App
