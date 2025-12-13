import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PiDownloadSimple as DownloadSimple, PiGithubLogo as GithubLogo, PiLinkedinLogo as LinkedinLogo, PiCode as Code, PiEnvelopeSimple as EnvelopeSimple } from 'react-icons/pi';
import { resumeData } from '../data/resume';
import ResumeModal from './ResumeModal';

const Hero = () => {
    const { profile } = resumeData;
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
            <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center lg:text-left z-10 w-full"
                >
                    <div className="inline-block px-4 py-1 mb-4 border border-accent-cyan/30 rounded-full bg-accent-cyan/10 backdrop-blur-sm">
                        <span className="text-accent-cyan font-semibold text-xs tracking-wider uppercase">Senior Quality Engineer</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
                        Hello, I'm <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-green animate-text-shine bg-[length:200%_auto]">
                            {profile.name}
                        </span>
                    </h1>

                    <p className="text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                        {profile.tagline}. <br />
                        Expert in Automation, Cloud Validation, and AI-driven Testing.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => setIsResumeModalOpen(true)}
                            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-accent-cyan transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,201,255,0.5)] transform hover:-translate-y-1 cursor-pointer"
                        >
                            <DownloadSimple size={20} weight="bold" />
                            Download CV
                        </button>

                        <div className="flex gap-4 items-center">
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-glass-bg border border-glass-border rounded-full hover:bg-accent-cyan/20 hover:border-accent-cyan text-text-main hover:text-accent-cyan transition-all duration-300">
                                <LinkedinLogo size={24} weight="fill" />
                            </a>
                            <a href={`mailto:${profile.email}`} className="p-3 bg-glass-bg border border-glass-border rounded-full hover:bg-accent-green/20 hover:border-accent-green text-text-main hover:text-accent-green transition-all duration-300">
                                <EnvelopeSimple size={24} weight="fill" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Visual / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex-1 flex justify-center items-center w-full"
                >
                    {/* Abstract Glass Card Visual representing QA/Code */}
                    <div className="relative w-80 h-96 sm:w-96 sm:h-[500px] glass rounded-3xl p-6 flex flex-col justify-between transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 hover:shadow-[0_20px_50px_rgba(0,201,255,0.2)] group">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-cyan/10 to-transparent rounded-3xl pointer-events-none"></div>

                        {/* Floating Icons */}
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 p-4 glass rounded-2xl z-20">
                            <GithubLogo size={32} className="text-text-main" />
                        </motion.div>

                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-10 -left-8 p-4 glass rounded-2xl z-20">
                            <Code size={32} className="text-accent-cyan" />
                        </motion.div>

                        {/* Content inside card */}
                        <div className="h-full w-full bg-glass-bg border border-glass-border rounded-xl overflow-hidden relative flex items-center justify-center p-8">
                            <img
                                src={`${import.meta.env.BASE_URL}Vaishnav.svg`}
                                alt="Vaishnav Logo"
                                className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_15px_rgba(64,255,170,0.3)]"
                            />
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="text-text-main font-bold text-xl">Vaishnav K.</div>
                            <div className="text-accent-green text-sm">Online • Available</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Resume Modal */}
            <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
        </section>
    );
};

export default Hero;
