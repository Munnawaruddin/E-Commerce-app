import React from 'react';
import './ProductCard.css';

import { useCart } from '../context/CartContext';
const ProductCard = ({ product, onView, onAddToCart }) => 
    {
        const { addToCart } = useCart();
    return (
        
        
            <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Indore Plants,Low maintainance</p>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => onView(product.name)}>View Product</button>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
           
        
    );
};

export default ProductCard;
