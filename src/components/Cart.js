// src/components/Cart.js
import React from 'react';
import "./Cart.css";
// src/components/Cart.js
import { useCart } from '../context/CartContext';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();

  if (!isOpen) return null; // Don't render anything if the cart is not open

  return (
    <div className="cart-modal">
      <h2>Your Cart</h2>
      <button onClick={onClose}>Close</button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: '50px' }} />
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
