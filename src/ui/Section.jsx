import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section id={id} className={`py-16 md:py-24 relative ${className}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-green">
                                    {title}
                                </span>
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
