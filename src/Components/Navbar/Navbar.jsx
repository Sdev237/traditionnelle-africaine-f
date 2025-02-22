import React, { useContext, useRef, useState } from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { FaBars, FaUserCircle } from 'react-icons/fa';

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture du menu
  const { getTotalItems } = useContext(ShopContext);
  const totalItems = getTotalItems();
  const menuRef = useRef();

  const menu_toggle = () => {
    setIsOpen(!isOpen); // Basculer l'état d'ouverture
    menuRef.current.classList.toggle('nav-menu-visible'); // Ajouter ou supprimer la classe visible
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <FaBars className={`nav-menu-icon ${isOpen ? 'open' : ''}`} size={24} onClick={menu_toggle} /> {/* Ajouter la classe open si isOpen est true */}
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none', color: '#626262' }}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: 'none', color: '#626262' }}>Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to='/womens' style={{ textDecoration: 'none', color: '#626262' }}>Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to='/kids' style={{ textDecoration: 'none', color: '#626262' }}>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'>
          {window.innerWidth <= 197 ? (
            <FaUserCircle className='login-logo' />
          ) : (
            <button>Login</button>
          )}
        
        </Link>
        <Link to='/cart'><img src={cart_icon} alt='' className='cart'/></Link>
        <div className='nav-cart-count'>{totalItems}</div>
      </div>
    </div>
  )
}

export default Navbar;