import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListingPage from './pages/ListingPage';
import CartPage from './pages/CartPage';
import ThankYouPage from './pages/ThankYouPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
