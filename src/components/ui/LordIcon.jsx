import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

const LordIcon = ({ iconData, size = 32, colors }) => {
    const playerRef = useRef(null);

    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, []);

    const handleHover = () => {
        playerRef.current?.playFromBeginning();
    };

    return (
        <div
            onMouseEnter={handleHover}
            style={{
                width: size,
                height: size,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}
        >
            <Player
                ref={playerRef}
                icon={iconData}
                size={size}
                colors={colors}
            />
        </div>
    );
};

export default LordIcon;
