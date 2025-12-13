import React from 'react';
import styles from './LogoLoop.module.css';
import { logosData } from '../data/logos';

const LogoLoop = () => {
    return (
        <div className={styles['logo-loop-container']}>
            <div className={styles['logo-track']}>
                {/* Set 1 */}
                {logosData.map((logo, index) => (
                    <div key={`set1-${index}`} className={styles['logo-item']} title={logo.title}>
                        <logo.icon className="text-2xl" /> {logo.label}
                    </div>
                ))}

                {/* Set 2 (Duplicate for seamless loop) */}
                {logosData.map((logo, index) => (
                    <div key={`set2-${index}`} className={styles['logo-item']} title={logo.title}>
                        <logo.icon className="text-2xl" /> {logo.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoLoop;
