import React from 'react';
import ProfileCard from './ProfileCard';
import Threads from './ui/Threads';

const WelcomeScreen = ({ isActive, onEnter }) => {
    return (
        <div id="welcome-screen" className={isActive ? '' : 'hidden'}>
            <div className="absolute inset-0 z-0">
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>
            <ProfileCard onEnter={onEnter} />
        </div>
    );
};

export default WelcomeScreen;
