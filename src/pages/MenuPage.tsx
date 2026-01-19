import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/menu.css';

import MenuImage1 from '../assets/espresso.jpg';
import MenuImage2 from '../assets/cappuccino.jpg';
import MenuImage3 from '../assets/Caramel.jpg';
import MenuImage4 from '../assets/coldbrew.jpg';


import ShakeImage1 from '../assets/shake.jpg';
import ShakeImage2 from '../assets/Vanilla Cream.jpg';
import ShakeImage3 from '../assets/Strawberry Dream.jpg';
import ShakeImage4 from '../assets/Oreo Blast.jpg'; 

import DessertImage1 from '../assets/Tiramisu.jpg';
import DessertImage2 from '../assets/cheesecake.jpg';
import DessertImage3 from '../assets/brownie.jpg';
import DessertImage4 from '../assets/cremebrulee.jpg';

import SpecialImage1 from '../assets/zensignature.jpg';
import SpecialImage2 from '../assets/matchalatte.jpg';
import SpecialImage3 from '../assets/lavenderhoney.jpg';
import SpecialImage4 from '../assets/affogato.jpg'; 

type Category = 'Coffee' | 'Shakes' | 'Desserts' | 'Specials';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: Category;
    image?: string;
}

const menuItems: MenuItem[] = [
    // Coffee
    { id: 1, name: 'Espresso', description: 'Rich and bold single shot of pure coffee essence', category: 'Coffee', image: MenuImage1 },
    { id: 2, name: 'Cappuccino', description: 'Creamy foam meets espresso perfection', category: 'Coffee', image: MenuImage2 },
    { id: 3, name: 'Caramel Latte', description: 'Smooth latte with silky caramel swirl', category: 'Coffee', image: MenuImage3 },
    { id: 4, name: 'Cold Brew', description: 'Slow-steeped for 24 hours, served chilled', category: 'Coffee', image: MenuImage4 },
    // Shakes
    { id: 7, name: 'Chocolate Shake', description: 'Rich Belgian chocolate blended creamy', category: 'Shakes', image: ShakeImage1 },
    { id: 8, name: 'Vanilla Bean', description: 'Madagascar vanilla in a creamy swirl', category: 'Shakes', image: ShakeImage2 },
    { id: 9, name: 'Strawberry Dream', description: 'Fresh strawberries blended to perfection', category: 'Shakes', image: ShakeImage3 },
    { id: 10, name: 'Oreo Blast', description: 'Crushed Oreos in a creamy milkshake', category: 'Shakes', image: ShakeImage4 },
    // Desserts
    { id: 11, name: 'Tiramisu', description: 'Classic Italian layered coffee dessert', category: 'Desserts', image: DessertImage1 },
    { id: 12, name: 'Cheesecake', description: 'New York style with berry compote', category: 'Desserts', image: DessertImage2 },
    { id: 13, name: 'Chocolate Brownie', description: 'Warm fudge brownie with ice cream', category: 'Desserts', image: DessertImage3 },
    { id: 14, name: 'Creme Brulee', description: 'Caramelized custard, vanilla bean infused', category: 'Desserts', image: DessertImage4 },
    // Specials
    { id: 15, name: 'Zen Signature', description: 'Our secret blend with honey and spices', category: 'Specials', image: SpecialImage1 },
    { id: 16, name: 'Matcha Latte', description: 'Premium Japanese green tea latte', category: 'Specials', image: SpecialImage2 },
    { id: 17, name: 'Lavender Honey', description: 'Floral notes with natural honey sweetness', category: 'Specials', image: SpecialImage3 },
    { id: 18, name: 'Affogato', description: 'Espresso poured over vanilla gelato', category: 'Specials', image: SpecialImage4 },
];

const categories: Category[] = ['Coffee', 'Shakes', 'Desserts', 'Specials'];

const MenuPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('Coffee');

    const filteredItems = menuItems.filter(item => item.category === activeCategory);

    return (
        <main className="glass-panel main-panel">
            <Navbar />
            <section className="menu-section">
                {/* Left Content - matching Hero layout */}
                <div className="menu-content">
                    <Link to="/" className="menu-back-link">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </Link>

                    <h1 className="menu-title">Our Menu</h1>
                    <p className="menu-subtitle">Handcrafted Selections</p>
                    <p className="menu-description">
                        Discover our carefully curated selection of premium beverages and treats,
                        crafted with the finest ingredients and served with passion.
                    </p>

                    {/* Category Tabs */}
                    <div className="menu-categories">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`menu-category-tab ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Menu Items - Compact List */}
                    <div className="menu-items-list">
                        {filteredItems.slice(0, 4).map(item => (
                            <div key={item.id} className="menu-item-compact">
                                <div className="menu-item-icon">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="menu-item-image" />
                                    ) : (
                                        <>
                                            {item.category === 'Coffee' && '☕'}
                                            {item.category === 'Shakes' && '🥤'}
                                            {item.category === 'Desserts' && '🍰'}
                                            {item.category === 'Specials' && '✨'}
                                        </>
                                    )}
                                </div>
                                <div className="menu-item-info">
                                    <h3 className="menu-item-name">{item.name}</h3>
                                    <p className="menu-item-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="menu-footer">
                        <div className="menu-footer-icon">☕</div>
                        <span className="menu-footer-text">Premium quality, every cup</span>
                    </div>
                </div>

                {/* Right Visual - matching Hero visual */}
                <div className="menu-visual">
                    <div className="menu-visual-glow" />
                    <div className="menu-featured-cards">
                        {filteredItems.slice(0, 2).map((item, index) => (
                            <div
                                key={item.id}
                                className={`menu-featured-card ${index === 0 ? 'featured-primary' : 'featured-secondary'}`}
                            >
                                <div className="featured-card-icon">
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="featured-card-image" />
                                    ) : (
                                        <>
                                            {item.category === 'Coffee' && '☕'}
                                            {item.category === 'Shakes' && '🥤'}
                                            {item.category === 'Desserts' && '🍰'}
                                            {item.category === 'Specials' && '✨'}
                                        </>
                                    )}
                                </div>
                                <h4 className="featured-card-name">{item.name}</h4>
                                <p className="featured-card-desc">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MenuPage;
