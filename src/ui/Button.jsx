import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = "",
    disabled = false,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-br from-accent-cyan to-accent-green text-bg hover:shadow-lg hover:shadow-accent-cyan/20 focus:ring-accent-cyan",
        secondary: "bg-glass-bg border border-glass-border text-text-primary hover:bg-glass-border hover:text-white focus:ring-glass-border",
        outline: "border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 focus:ring-accent-cyan",
        ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5 focus:ring-white/20"
    };

    return (
        <motion.button
            whileHover={!disabled ? { scale: 1.02 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>

            {/* Hover Shine Effect for Primary Buttons */}
            {variant === 'primary' && !disabled && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}
        </motion.button>
    );
};

export default Button;
