import React from 'react';
import Section from '../ui/Section';
import MagicBento from './MagicBento';

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills" subtitle="My comprehensive toolset for Quality Assurance and Automation.">
            <MagicBento
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
            />
        </Section>
    );
};

export default Skills;
