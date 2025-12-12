import { useRef, useState, useCallback } from 'react';

export const useTilt = ({ sensitivity = 10, speed = 400, glare = true, maxGlare = 0.5 } = {}) => {
    const ref = useRef(null);
    const [style, setStyle] = useState({ transform: '', transition: '' });
    const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

    const handleMouseMove = useCallback((e) => {
        const element = ref.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        // Calculate rotation formulas
        const x = yPct * sensitivity;
        const y = xPct * -sensitivity;

        setStyle({
            transform: `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'none' // Instant update for smoothness
        });

        if (glare) {
            const glareX = mouseX / width * 100;
            const glareY = mouseY / height * 100;
            setGlareStyle({
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${maxGlare}), transparent 50%)`,
                opacity: 1
            });
        }
    }, [sensitivity, glare, maxGlare]);

    const handleMouseLeave = useCallback(() => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
        });
        setGlareStyle({ opacity: 0 });
    }, [speed]);

    return { ref, style, glareStyle, handleMouseMove, handleMouseLeave };
};
