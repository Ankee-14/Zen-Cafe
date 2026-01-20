import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OrderReview from './components/OrderReview';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      {/* Background with gradient and wave shapes */}
      <div className="app-background">
        <div className="wave-shape wave-shape-1" />
        <div className="wave-shape wave-shape-2" />
        <div className="wave-shape wave-shape-3" />
        <div className="wave-shape wave-shape-4" />
        <div className="wave-shape wave-shape-5" />
      </div>

      {/* Main Content Container */}
      <div className="container app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      {/* Order Review Modal */}
      <OrderReview />
    </CartProvider>
  );
};

export default App;
