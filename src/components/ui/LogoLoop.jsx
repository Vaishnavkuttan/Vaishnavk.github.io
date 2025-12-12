"use client";

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    SiFramer,
    SiNextdotjs,
    SiVercel,
} from "react-icons/si";

const logos = [
    <SiNextdotjs key="nextjs" className="h-6 w-6 md:h-8 md:w-8" />,
    <SiVercel key="vercel" className="h-6 w-6 md:h-8 md:w-8" />,
    <SiFramer key="framer" className="h-6 w-6 md:h-8 md:w-8" />,
    <SiNextdotjs key="nextjs2" className="h-6 w-6 md:h-8 md:w-8" />,
    <SiVercel key="vercel2" className="h-6 w-6 md:h-8 md:w-8" />,
    <SiFramer key="framer2" className="h-6 w-6 md:h-8 md:w-8" />,
];

const LogoLoop = ({ className }) => {
    return (
        <div
            className={cn(
                "relative flex h-20 w-full items-center justify-center overflow-hidden bg-background md:h-28",
                className
            )}
        >
            <motion.div
                className="absolute flex w-max flex-nowrap"
                animate={{ x: "-50%" }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="mx-4 flex items-center justify-center text-4xl text-foreground/80 md:mx-6"
                    >
                        {logo}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoLoop;
