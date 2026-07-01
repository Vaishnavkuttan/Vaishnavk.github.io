import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const TiltedCard = ({
    children,
    containerHeight = "100%",
    containerWidth = "100%",
    scaleOnHover = 1.05,
    rotateAmplitude = 10,
    className = "",
    style = {}
}) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]), {
        stiffness: 150,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]), {
        stiffness: 150,
        damping: 30,
    });

    const scale = useSpring(1, {
        stiffness: 150,
        damping: 30,
    });

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        scale.set(1);
    }

    return (
        <figure
            ref={ref}
            style={{
                height: containerHeight,
                width: containerWidth,
                perspective: "1000px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 10,
                margin: 0,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className={className}
                style={{
                    ...style,
                    rotateX,
                    rotateY,
                    scale,
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </motion.div>
        </figure>
    );
};

export default TiltedCard;
