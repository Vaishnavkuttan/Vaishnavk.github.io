import React from 'react';
import ProfileCard from './ProfileCard';

const WelcomeScreen = ({ isActive, onEnter }) => {
    return (
        <div id="welcome-screen" className={isActive ? '' : 'hidden'}>
            <ProfileCard onEnter={onEnter} />
        </div>
    );
};

export default WelcomeScreen;
