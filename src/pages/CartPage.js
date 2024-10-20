// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
