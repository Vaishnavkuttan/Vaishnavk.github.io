import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="py-4 border-t border-glass-border relative z-10 glass mt-8 text-center">
            <div className="text-text-secondary text-sm">
                <p>&copy; {new Date().getFullYear()} Vaishnav Kalaikumar. All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;
