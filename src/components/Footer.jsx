import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-glass-border relative z-10 glass mt-12 text-center">
            <div className="text-text-secondary text-sm">
                <p>&copy; {new Date().getFullYear()} Vaishnav Kalaikumar. All rights reserved.</p>
                <p className="mt-2 opacity-50 text-xs">Built with React, TailwindCSS & Framer Motion</p>
            </div>
        </footer>
    );
};

export default Footer;
