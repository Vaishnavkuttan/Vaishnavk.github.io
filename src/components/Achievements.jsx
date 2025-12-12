import React from 'react';
import Section from '../ui/Section';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import { PiMedal as Medal, PiCertificate as Certificate } from 'react-icons/pi';

const Achievements = () => {
    const { achievements, education } = resumeData;

    return (
        <Section id="achievements" title="Achievements & Education" subtitle="Recognition and academic background.">

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="glass p-8 rounded-3xl border border-glass-border relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-accent-cyan">
                            {index === 0 ? <Medal size={100} /> : <Certificate size={100} />}
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-text-main mb-2">{item.title}</h3>
                            <div className="text-accent-cyan text-sm font-semibold uppercase tracking-wider mb-4">{item.subtitle}</div>
                            <p className="text-text-secondary">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Education Split */}
            <div className="glass p-8 rounded-3xl border border-glass-border flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green shrink-0">
                        <Certificate size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-text-main max-w-md">{education[0].degree}</h3>
                        <div className="text-text-secondary">{education[0].institution}</div>
                    </div>
                </div>
                <div className="px-6 py-2 rounded-full glass text-text-main font-mono">
                    {education[0].year}
                </div>
            </div>

        </Section>
    );
};

export default Achievements;
