import React, { useRef } from 'react';

// Wrapper for the lord-icon custom element
const LordIconElement = ({
    src,
    trigger = "hover",
    size = 32,
    colors = "primary:#00c9ff,secondary:#40ffaa"
}) => {
    const iconRef = useRef(null);

    return (
        <lord-icon
            ref={iconRef}
            src={src}
            trigger={trigger}
            colors={colors}
            style={{ width: size, height: size }}
        />
    );
};

export default LordIconElement;
