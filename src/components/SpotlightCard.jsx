import React, { useRef } from 'react';
import styles from './SpotlightCard.module.css';

const SpotlightCard = ({ children, className = '', onClick }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            className={`${styles['spotlight-card']} ${className}`}
            onMouseMove={handleMouseMove}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default SpotlightCard;
