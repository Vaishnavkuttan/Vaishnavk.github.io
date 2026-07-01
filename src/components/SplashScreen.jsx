import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onEnter }) => {
    // 3D Tilt Logic handled inside ProfileCard if strictly necessary, or global script
    // But since ProfileCard is now React, we should move the tilt logic to ProfileCard component or a hook.
    // For now, the CSS :hover handles tilt, but the mousemove JS was for advanced tilt.
    // I will skip the advanced JS tilt synchronization for now as CSS is doing heavy lifting 
    // and focus on structure. 
    // Update: I will just render ProfileCard here.

    return (
        <motion.div
            id="welcome-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, pointerEvents: 'none' }}
            transition={{ duration: 0.8 }}
        >
            <ProfileCard onEnter={onEnter} />
        </motion.div>
    );
};

export default SplashScreen;
