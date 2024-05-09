import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import image from '../Assets/hero_img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
            <div className="hero-hand-icon">
                <p>TATUM 2</p>
            </div>
            <p><h6>description</h6></p>
        </div>
        <div className="hero-latest-btn">

            <div>Buy Now</div> 
            <img src={arrow_icon} alt="" />
  
        </div>
      </div>
      <div className="hero-right">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Hero
