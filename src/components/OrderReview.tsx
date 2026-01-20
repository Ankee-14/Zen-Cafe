import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/order-review.css';

const OrderReview: React.FC = () => {
    const { cartItems, updateQuantity, removeFromCart, clearCart, isCartOpen, setIsCartOpen } = useCart();

    if (!isCartOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsCartOpen(false);
        }
    };

    return (
        <div className="order-overlay" onClick={handleOverlayClick}>
            <div className="order-modal glass-panel">
                <div className="order-header">
                    <h2 className="order-title">Your Order</h2>
                    <button
                        className="order-close-btn"
                        onClick={() => setIsCartOpen(false)}
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="order-empty">
                        <span className="order-empty-icon">☕</span>
                        <p>Your order is empty</p>
                        <button
                            className="order-browse-btn"
                            onClick={() => setIsCartOpen(false)}
                        >
                            Browse Menu
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="order-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="order-item">
                                    <div className="order-item-info">
                                        <h4 className="order-item-name">{item.name}</h4>
                                        <p className="order-item-category">{item.category}</p>
                                    </div>
                                    <div className="order-item-controls">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            aria-label="Decrease quantity"
                                        >
                                            −
                                        </button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                            aria-label="Remove item"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="order-footer">
                            <div className="order-total">
                                <span>Total Items:</span>
                                <span className="order-total-count">
                                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            </div>
                            <div className="order-actions">
                                <button
                                    className="order-clear-btn"
                                    onClick={clearCart}
                                >
                                    Clear All
                                </button>
                                <button
                                    className="order-confirm-btn"
                                    onClick={() => {
                                        alert('Order placed successfully! Thank you for ordering from Zen Cafe.');
                                        clearCart();
                                        setIsCartOpen(false);
                                    }}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default OrderReview;
