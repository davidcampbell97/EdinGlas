import React from 'react'
import carFleet from '../assets/fleet.jpg'
import '../styles/about.css'

function About() {
  return (
    <div className='about'>
        <div className ='aboutTop' style={{ backgroundImage: `url(${carFleet})`}}></div>
        <div className ='aboutBottom'>
            <h1>About Us</h1>
            <p>Welcome to EdinGlas, where luxury, comfort, and professionalism come together to 
                provide you with an unparalleled transportation experience. With over a decade of 
                dedicated service, our family-owned business takes great pride in offering top-notch 
                chauffeur services tailored to your unique needs. Our team of highly trained and 
                experienced drivers is committed to delivering exceptional customer service, ensuring 
                that every journey with us is smooth, safe, and memorable. Whether you're traveling 
                for business, leisure, or special occasions, we strive to exceed your expectations 
                by providing immaculately maintained vehicles, punctual arrivals, and personalized attention. 
                We believe in building long-lasting relationships with our clients, based on trust and reliability. 
                Choose EdinGlas for a truly exceptional transportation experience that will leave 
                you feeling pampered and satisfied."</p>

        </div>


    </div>
  )
}

export default About