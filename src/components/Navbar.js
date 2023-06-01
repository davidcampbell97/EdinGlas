import React from 'react';
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        
    <div className='rightSide'></div>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/business">Business</Link>
        <Link to = "/fleet">Fleet</Link>
    </div>
  )
}

export default Navbar