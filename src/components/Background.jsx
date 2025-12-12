import React from 'react';
import styles from './Background.module.css';

const Background = () => {
    return (
        <>
            <div className={styles['prism-background']}>
                <div className={styles['prism-blob']}></div>
                <div className={styles['prism-blob']}></div>
                <div className={styles['prism-blob']}></div>
            </div>
            
            <div className={styles['noise-overlay']}></div>
            <div className={styles['dot-grid-overlay']}></div>
        </>
    );
};

export default Background;
