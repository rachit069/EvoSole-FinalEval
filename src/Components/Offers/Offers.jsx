import React from 'react'
import './Offers.css'
import offer from '../Assets/offer1.jpg'
import offer1 from '../Assets/offer2.jpg'
import offer2 from '../Assets/offer3.jpg'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h3>Featured</h3>
        <p> </p>
        <div className="image-container">
      <div className="container">
        <h3 className="title">Nike Invincible 3</h3>
        <img src={offer} alt="Product 1" />
        <Link to='/men'>
        <button className="buy-button">Buy Now</button>
        </Link>
      </div>
      <div className="container">
        <h3 className="title">Nike One Top</h3>
        <img src={offer1} alt="Product 2" />
        <Link to='/women'>
        <button className="buy-button">Buy Now</button>
        </Link>
        </div>
      <div className="container">
        <h3 className="title">Nike ACG</h3>
        <img src={offer2} alt="Product 3" />
        <Link to='/kids'>
        <button className="buy-button">Buy Now</button>
        </Link>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Offers
