import React from 'react';
import '../styles/features.css';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: '☕',
        title: 'Premium Quality',
        description: 'Sourced from the finest coffee plantations worldwide',
    },
    {
        icon: '🍵',
        title: 'Expert Brewing',
        description: 'Expertly brewed to perfection for the best taste experience',
    },
    {
        icon: '⚡',
        title: 'Fast Service',
        description: 'Quick and efficient service without compromising quality',
    },
];

const Features: React.FC = () => {
    return (
        <div className="features">
            {features.map((feature, index) => (
                <div key={index} className="feature-card">
                    <div className="feature-icon">
                        <span className="feature-icon-emoji">{feature.icon}</span>
                    </div>
                    <span className="feature-title">{feature.title}</span>
                    <span className="feature-text">{feature.description}</span>
                </div>
            ))}
        </div>
    );
};

export default Features;
