import React from 'react'
import contactLeft from '../assets/contactLeft.jpg'
import { Label } from '@mui/icons-material'
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${contactLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>

            <form id = 'contactForm' method='POST'>
                <label htmlFor = 'name'>Full Name</label>
                <input name = 'name' placeholder='Enter full name ...' type = 'text'></input>
            </form>
            
            
            </div>
        
        Contact</div>
  )
}

export default Contact