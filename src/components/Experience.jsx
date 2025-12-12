import React from 'react';
import Section from '../ui/Section';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
    const { experience } = resumeData;

    return (
        <Section id="experience" title="Work Experience" subtitle="My professional journey and key contributions.">
            <div className="relative border-l-2 border-glass-border ml-3 md:ml-6 space-y-12">
                {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-12 group">
                        {/* Timeline Dot */}
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-bg border-4 border-accent-cyan group-hover:bg-accent-cyan transition-colors duration-300 shadow-[0_0_10px_rgba(0,201,255,0.5)]"></div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <SpotlightCard className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-text-main">{exp.role}</h3>
                                        <div className="text-accent-cyan font-medium">{exp.company}</div>
                                    </div>
                                    <div className="px-4 py-1 rounded-full bg-white/5 text-sm text-text-secondary border border-glass-border whitespace-nowrap self-start md:self-auto">
                                        {exp.duration}
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.responsibilities.map((task, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm md:text-base">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-green/50 shrink-0"></span>
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
