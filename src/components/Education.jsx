import React from 'react';
import Section from '../ui/Section';
import SpotlightCard from './SpotlightCard';
import { PiGraduationCap } from 'react-icons/pi';

const Education = () => {
    return (
        <Section id="education" title="Education" className="text-center">
            <div className="flex justify-center mt-10">
                <SpotlightCard className="max-w-2xl w-full p-10 text-left flex flex-col md:flex-row items-center gap-8">
                    {/* Icon/Graphic */}
                    <div className="bg-white/5 p-5 rounded-full border border-glass-border">
                        <PiGraduationCap size={48} className="text-text-main" />
                    </div>

                    {/* Details */}
                    <div>
                        <span className="text-sm text-text-secondary uppercase tracking-wider block mb-1">Graduated 2017</span>
                        <h3 className="text-2xl font-bold text-text-main mb-1">B.E. Electrical & Electronics</h3>
                        <div className="text-lg text-text-main font-medium mb-2">Sri Krishna Engineering College, Chennai</div>
                        <p className="text-text-secondary">Aggregate: 7.08 CGPA</p>
                    </div>
                </SpotlightCard>
            </div>
        </Section>
    );
};

export default Education;
