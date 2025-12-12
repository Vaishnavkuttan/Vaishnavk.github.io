import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
    children,
    className = "",
    hoverEffect = false,
    ...props
}) => {
    return (
        <motion.div
            className={`glass rounded-2xl p-6 ${className}`}
            whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
