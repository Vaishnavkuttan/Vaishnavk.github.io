import React from 'react';
import Section from '../ui/Section';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import { PiArrowRight as ArrowRight } from 'react-icons/pi';

const Projects = () => {
    const { projects } = resumeData;

    return (
        <Section id="work" title="Featured Projects" subtitle="Key projects showcasing automation and testing expertise.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="glass p-0 rounded-2xl border border-glass-border overflow-hidden flex flex-col h-full group"
                    >
                        {/* Card Header Gradient */}
                        <div className="h-2 bg-gradient-to-r from-accent-cyan to-accent-green"></div>

                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
                            <p className="text-text-secondary text-sm mb-6 flex-1">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 text-xs rounded-lg bg-white/5 text-text-secondary border border-glass-border">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent-cyan hover:text-text-main font-semibold transition-colors">
                    View more on GitHub <ArrowRight />
                </a>
            </div>
        </Section>
    );
};

export default Projects;
