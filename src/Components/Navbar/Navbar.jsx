import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/evo-sole.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
  
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("new")}} className="nav-logo">
        <img src={logo} alt="" />
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("New & Featured")}}><Link to='/'>New & Featured</Link>{menu==="new"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Womens")}}><Link to="womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Sales")}}><Link to='/'>Sales</Link>{menu==="sales"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Customize")}}><Link to='/'>Customize</Link>{menu==="customize"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("SNIKRS")}}><Link to='/'>SNIKRS</Link>{menu==="snikrs"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}


const ShopCollection = () => {
  return (
    <div className="shop-collection">
      <h2>Shop Our Collection</h2>
      <p>  </p>
      <p>Meant for the spotlight. Double stacked Air Units</p>
      <p>turns a classic silhoutte into a modern icon.</p>
      <p>Make a bold statement in the New Air Max 90</p>
       <p>  LV8, </p>
        <p>styled by New Jeans
      </p>
      <button>Join Us</button>
    </div>
  );
}

export default Navbar
