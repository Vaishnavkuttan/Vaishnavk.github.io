import React from 'react';
import styles from './Aurora.module.css';

const Aurora = () => {
    return (
        <div className={styles['aurora-container']}>
            <div className={`${styles['aurora-blob']} ${styles['blob-1']}`}></div>
            <div className={`${styles['aurora-blob']} ${styles['blob-2']}`}></div>
            <div className={`${styles['aurora-blob']} ${styles['blob-3']}`}></div>
        </div>
    );
};

export default Aurora;
