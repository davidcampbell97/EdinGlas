import React, {useState} from 'react';
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {

const [openLinks, setOpenLinks]  = useState(false);

const toggleNavbar = () => {
   setOpenLinks(!openLinks); 
    



}

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/book">Book</Link>
            <Link to = "/fleet">Fleet</Link>
            </div>
        </div>
        
    <div className='rightSide'>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/book">Book</Link>
        <Link to = "/fleet">Fleet</Link>
        <buttton onClick ={toggleNavbar}>
        <ReorderIcon />
        </buttton>
        </div>
    </div>
  )
}

export default Navbar