// src/components/Header.js
import React, { useState }from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'; // Assuming you have a separate CSS file for the header
import Cart from './Cart';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const handleCartClick = () => {
        navigate('/cart'); // Navigate to the Cart page
      };
    const [isCartOpen] = useState(false);

    
  return (
    <header className="header">
      <div className="logo">My E-Commerce</div>
      <input type="text" className="search-bar" placeholder="Search products..." />
      
      <div className="icons">
        <AccountCircleIcon className="icon" fontSize="large" titleAccess="Profile" />
        <button className="button-of" onClick={handleCartClick}>
          🛒 {}
        </button>
        
      </div>
      <div>
        <span>Cart Items: {cartItems.length}</span>
        
      </div>
      <Cart isOpen={isCartOpen} onClose={handleCartClick} />
    </header>
  );
};

export default Header;
