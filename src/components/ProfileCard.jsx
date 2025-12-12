import React from 'react';
import { useTilt } from '../hooks/useTilt';

const ProfileCard = ({ onEnter }) => {
    // Determine if we want to reverse logic or just tune sensitivity
    // Original used -10 for Y axis (rotateX) when mouse at bottom.
    // Hook: yPct (0.5) * sensitivity. If sensitivity -20, result -10. 
    // So passing -20 for sensitivity might match original feel.
    const { ref, style, glareStyle, handleMouseMove, handleMouseLeave } = useTilt({
        sensitivity: 20, // Tuned for standard "look at mouse" feel
        maxGlare: 0.5
    });

    return (
        <div
            ref={ref}
            className="profile-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onEnter}
            style={style}
        >
            {/* 1. The Glare Effect Layer */}
            <div className="card-glare" style={glareStyle}></div>


            {/* 2. The Background Image */}
            <div className="profile-card-full-img">
                <img src="/src/assets/Vaishnav.png" alt="Vaishnav Profile" onError={(e) => { e.target.src = 'https://placehold.co/500x700/0f172a/FFF?text=Vaishnav'; }} />
            </div>

            {/* 3. Status Badge */}
            <div className="status-badge">
                <span className="status-dot"></span>
                <span className="status-text">Open to Work</span>
            </div>

            {/* 4. Header Info */}
            <div className="profile-header-info">
                <h2 className="profile-name">Vaishnav Kalaikumar</h2>
                <p className="profile-role">Senior Quality Engineer</p>
            </div>

            {/* 5. Floating Content Box */}
            <div className="profile-card-content">
                <div className="profile-card-text-box">
                    <button className="profile-btn">
                        <span>Enter Portfolio</span>
                        <i className="ph ph-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
