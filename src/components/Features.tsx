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
        title: 'Daerier',
        description: 'Lorem ore catanee meren infegente getdinberg',
    },
    {
        icon: '🍵',
        title: 'Choole',
        description: 'oletched ors cateron of lore! celenon etebening',
    },
    {
        icon: '⚡',
        title: 'Senst gürtj',
        description: 'cheprossilerimera chrepredentin fiercele ot prieticle',
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
