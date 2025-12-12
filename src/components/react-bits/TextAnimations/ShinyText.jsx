import React from 'react';
import styles from './ShinyText.module.css';

const ShinyText = ({ text, disabled = false, speed = 3, className = '' }) => {
    const animationDuration = `${speed}s`;

    return (
        <span
            className={`${styles.shinyText} ${disabled ? styles.disabled : ''} ${className}`}
            style={{ animationDuration }}
        >
            {text}
        </span>
    );
};

export default ShinyText;
