import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';
import '../styles/hero.css';
import HeroImg from '../assets/coffe.png';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            {/* Left Content */}
            <div className="hero-content">
                <h1 className="hero-title">Zen Cafe</h1>
                <p className="hero-subtitle"> Sip. Relax. Repeat. </p>

                <p className="hero-description">
                    From the first sip to the last moment, Zen Cafe is designed for comfort, balance, and calm.
                </p>

                {/* Category Tabs */}
                <div className="hero-categories">
                    <button className="category-tab active">
                        Coffee
                    </button>
                    <button className="category-tab category-tab--accent">
                        Desserts
                    </button>
                </div>

                {/* Feature Cards */}
                <Features />

                {/* CTA Button */}
                <div className="hero-cta">
                    <Link to="/menu" className="hero-cta-button">
                        <span>Explore Menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Footer */}
                <div className="hero-footer">
                    <div className="hero-footer-logo">☕</div>
                    <span className="hero-footer-text">Serving Moments of Calm</span>
                </div>
            </div>

            {/* Right Visual */}
            <div className="hero-visual">
                {/* Decorative leaves */}
                <svg className="hero-decor-leaves" viewBox="0 0 100 100" fill="none">
                    <path
                        d="M50 10 C60 30 80 40 90 60 C70 50 50 60 30 80 C40 60 30 40 50 10"
                        fill="rgba(45, 90, 120, 0.4)"
                    />
                    <path
                        d="M60 20 C70 35 85 45 95 55 C75 48 60 55 45 70 C52 55 48 40 60 20"
                        fill="rgba(56, 120, 150, 0.3)"
                    />
                </svg>

                <div className="hero-product-wrapper">
                    <div className="hero-product-glow" />

                    {/* Coffee Cup Image */}
                    <img
                        src={HeroImg}
                        alt="Iced Coffee with chocolate topping"
                        className="hero-product-image"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.width = '300px';
                            target.style.height = '420px';
                            target.style.background = 'linear-gradient(180deg, #5a4535 0%, #8B6914 50%, #c4956a 100%)';
                            target.style.borderRadius = '20px 20px 40px 40px';
                            target.alt = 'Coffee Cup Placeholder - Add /public/coffee-cup.png';
                        }}
                    />

                    {/* Floating Beans */}
                    <div className="hero-beans">
                        <img
                            src="src/assets/beans.png"
                            alt=""
                            className="hero-bean hero-bean--1"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                // Create inline bean SVG as fallback
                                target.style.display = 'none';
                            }}
                        />
                        <img
                            src="src/assets/beans.png"
                            alt=""
                            className="hero-bean hero-bean--2"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                        <img
                            src="src/assets/beans.png"
                            alt=""
                            className="hero-bean hero-bean--3"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                        <img
                            src="src/assets/beans.png"
                            alt=""
                            className="hero-bean hero-bean--4"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                        <img
                            src="src/assets/beans.png"
                            alt=""
                            className="hero-bean hero-bean--5"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
