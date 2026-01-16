import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/about.css';

const AboutPage: React.FC = () => {
    return (
        <main className="glass-panel main-panel">
            <Navbar />
            <section className="about-section">
                {/* Left Content */}
                <div className="about-content">
                    <Link to="/" className="about-back-link">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </Link>

                    <h1 className="about-title">About Us</h1>
                    <p className="about-subtitle">Since 2021</p>

                    <p className="about-description">
                        Welcome to Zen Cafe, where every cup tells a story. We are passionate about
                        crafting exceptional coffee experiences in a warm, inviting atmosphere.
                        Our commitment to quality and community drives everything we do.
                    </p>

                    {/* Location Block */}
                    <div className="about-location">
                        <div className="location-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <div className="location-details">
                            <span className="location-city">Downtown District</span>
                            <span className="location-country">United States</span>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="about-highlights">
                        <div className="highlight-card">
                            <div className="highlight-icon">🫘</div>
                            <div className="highlight-text">
                                <h4>Freshly Roasted</h4>
                                <p>Premium beans roasted daily</p>
                            </div>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">☕</div>
                            <div className="highlight-text">
                                <h4>Handcrafted</h4>
                                <p>Made with care and precision</p>
                            </div>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon">🛋️</div>
                            <div className="highlight-text">
                                <h4>Cozy Space</h4>
                                <p>Relax and enjoy the moment</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="about-footer">
                        <div className="about-footer-icon">☕</div>
                        <span className="about-footer-text">Crafted with love since 2021</span>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="about-visual">
                    <div className="about-visual-glow" />

                    {/* Abstract decorative element */}
                    <div className="about-visual-shape">
                        <div className="visual-ring visual-ring-1"></div>
                        <div className="visual-ring visual-ring-2"></div>
                        <div className="visual-ring visual-ring-3"></div>
                        <div className="visual-center-icon">☕</div>
                    </div>

                    {/* Stats cards */}
                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Serving</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Unique Blends</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
