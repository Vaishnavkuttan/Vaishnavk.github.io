import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { PiHouse as House, PiUser as User, PiCpu as Cpu, PiBriefcase as Briefcase, PiEnvelopeSimple as EnvelopeSimple, PiSun as Sun, PiMoon as Moon, PiTrendUp, PiLightning, PiBriefcase } from 'react-icons/pi';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Work', to: 'work', icon: Briefcase },
    { name: 'Experience', to: 'experience', icon: PiTrendUp },
    { name: 'About', to: 'about', icon: User },
    { name: 'Skills', to: 'skills', icon: PiLightning },

];

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        }
        return 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            document.body.setAttribute('data-theme', 'dark');
        } else {
            root.classList.remove('dark');
            document.body.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        const footer = document.getElementById('footer');
        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) {
                observer.unobserve(footer);
            }
        };
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.nav
            initial={{ y: 100, x: "-50%" }}
            animate={{ y: isFooterVisible ? -60 : 0, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 bg-glass-bg backdrop-blur-md border border-glass-border border-t-glass-highlight shadow-glass-shadow rounded-full px-8 py-3 flex items-center gap-6 transition-all duration-300"
        >
            <ul className="flex gap-6 m-0 p-0">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-50}
                            activeClass="bg-white/10 text-text-main translate-y-[-3px]"
                            className="flex flex-col items-center justify-center text-[0.8rem] uppercase tracking-wider text-text-secondary font-semibold py-2 px-4 rounded-3xl transition-all duration-300 hover:text-text-main hover:bg-white/10 hover:-translate-y-1 cursor-pointer group"
                        >
                            <link.icon className="text-xl mb-0.5 block group-hover:scale-110 transition-transform" />
                            <span className="hidden md:block">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="bg-transparent border-none text-text-secondary cursor-pointer text-xl p-2 rounded-full transition-all duration-300 hover:text-text-main hover:bg-white/10 hover:-translate-y-0.5 flex items-center justify-center"
                title="Toggle Theme"
            >
                {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
        </motion.nav>
    );
};

export default Navbar;
