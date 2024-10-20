import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="product-container">  {/* Parent container */}
            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={onAddToCart} 
                />
            ))}
        </div>
    );
};

export default ProductList;
