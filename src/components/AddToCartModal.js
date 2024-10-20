import React from 'react';

const AddToCartModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="modal">
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => {
                // Logic to add to cart
                onClose();
            }}>Confirm Add to Cart</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default AddToCartModal;
