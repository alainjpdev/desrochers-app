import React, {useState} from 'react'
import { Link } from "react-router-dom"
// import { Button } from "./Button.js"
import logo from "../images/desrochers.png"

import "./Navbar.css"
function Navbar() {

  const [click, setClick] = useState(false)

  const [button, setButton] = useState(true)
  
  const handleClick = () => setClick(!click)
  
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {

    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
     <nav className="navbar">
      <div className="navbar-container">
        <Link to="/"> <img src={logo} alt="logo-moke" height={40} to="/" key={"logo-moke"}/></Link>
     
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        
        </Link>
      
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}/>
        </div>
        <ul  className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
              Map1
            </Link>
            </li>
            <li className='nav-item'>
            <Link to="/Map2" className='nav-links' onClick={closeMobileMenu}>
              Map2
            </Link>
            </li>

            <li className='nav-item'>
            <Link to="/Map3" className='nav-links' onClick={closeMobileMenu}>
              Map3
            </Link>
            </li>



        
        </ul>
      </div>
     </nav>
     <hr/>
    </>
  )
}

export default Navbar