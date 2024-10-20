// src/pages/ListingPage.js
import React, { useState } from 'react';
import { mockProducts } from '../data/mockProducts';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom'; // Update this import

const ITEMS_PER_PAGE = 5;

const ListingPage = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [currentPage, setCurrentPage] = useState(1);
    const [modalProduct, setModalProduct] = useState(null);

    const handleViewProduct = (productName) => {
        navigate(`/thank-you?product=${productName}`); // Update navigation logic
    };

    const handleAddToCart = (product) => {
        setModalProduct(product);
    };

    const handleCloseModal = () => {
        setModalProduct(null);
    };

    const totalPages = Math.ceil(mockProducts.length / ITEMS_PER_PAGE);
    const currentProducts = mockProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    return (
        <div>
            <Header />
            <div className="product-list">
                {currentProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onView={handleViewProduct} 
                        onAddToCart={handleAddToCart} 
                    />
                ))}
            </div>
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
            />
            <AddToCartModal product={modalProduct} onClose={handleCloseModal} />
        </div>
    );
};

export default ListingPage;
