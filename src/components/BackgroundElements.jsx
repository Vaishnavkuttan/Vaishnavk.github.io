import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
    return (
        <>
            <div className="prism-background">
                <div className="prism-blob"></div>
                <div className="prism-blob"></div>
                <div className="prism-blob"></div>
            </div>
            <div className="noise-overlay"></div>
            <div className="dot-grid-overlay"></div>
        </>
    );
};

export default BackgroundElements;
