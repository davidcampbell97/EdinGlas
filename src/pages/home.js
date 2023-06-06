import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/mercInterior.jpg'
import '../styles/home.css'



function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className = "headerContainer">
            <h1>EdinGlas Transport</h1>
            <p>Excellence Always!</p>
            <Link to ="/book">
            <button>Book Now!</button>
            </Link>
        </div>
    </div>
  )
}

export default Home