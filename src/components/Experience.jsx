import React from 'react';
import Section from '../ui/Section';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
    const { experience } = resumeData;
    // Reverse experience to show oldest first (Left to Right)
    const sortedExperience = [...experience].reverse();

    // Helper: Calculate duration string roughly from "Mon YYYY"
    const getDuration = (durationStr) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if (!durationStr.includes('–')) return durationStr;

        const [startStr, endStr] = durationStr.split('–').map(s => s.trim());
        const parseDate = (s) => {
            if (s.toLowerCase() === 'present') return new Date();
            const [mon, year] = s.split(' ');
            return new Date(parseInt(year), months.indexOf(mon.substr(0, 3)));
        };

        const start = parseDate(startStr);
        const end = parseDate(endStr);

        let diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        // inclusive 
        // diffMonths += 1;

        if (diffMonths < 1) return "1 Month";

        const years = Math.floor(diffMonths / 12);
        const remMonths = diffMonths % 12;

        let parts = [];
        if (years > 0) parts.push(`${years} Year${years > 1 ? 's' : ''}`);
        if (remMonths > 0) parts.push(`${remMonths} Month${remMonths > 1 ? 's' : ''}`);

        return parts.join(' & ') || "1 Month";
    };

    // Helper: Get formatted date for label (Using user specific overrides)
    const getStartDate = (company, durationStr) => {
        if (company.toLowerCase().includes('sutherland')) return '2017-09-06';
        if (company.toLowerCase().includes('hcl')) return '2020-02-17';
        if (company.toLowerCase().includes('cognizant')) return '2021-02-05';

        const part = durationStr.split('–')[0].trim();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const [mon, year] = part.split(' ');
        const mIndex = months.indexOf(mon.substr(0, 3));
        if (mIndex === -1) return part;
        const mm = (mIndex + 1).toString().padStart(2, '0');
        return `${year}-${mm}-01`;
    };

    const getEndDate = (company, durationStr) => {
        if (company.toLowerCase().includes('sutherland')) return '2019-07-01';
        if (company.toLowerCase().includes('hcl')) return '2021-01-29';
        if (company.toLowerCase().includes('cognizant')) return 'Till Now';

        const part = durationStr.split('–')[1].trim();
        if (part.toLowerCase() === 'present') return 'Till Now';
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const [mon, year] = part.split(' ');
        const mIndex = months.indexOf(mon.substr(0, 3));
        if (mIndex === -1) return part;
        const mm = (mIndex + 1).toString().padStart(2, '0');
        return `${year}-${mm}-01`;
    };

    return (
        <Section id="experience" title="Work Experience" subtitle="My professional journey and key contributions.">

            {/* Visual Timeline (Replica Style) */}
            <div className="relative w-full overflow-x-auto pb-20 pt-10 scrollbar-hide">
                <div className="min-w-[1000px] px-8">
                    {/* Header */}
                    <h3 className="text-xl font-bold text-text-main mb-16">
                        Total Exp - 7 years and 7 months
                    </h3>

                    {/* Timeline Row */}
                    <div className="flex items-end relative h-[250px]">

                        {/* Dashed Connector Line (Background) */}
                        {/* Aligned based on Dates (h-8=32px) + Margin (mt-6=24px) + Half Marker (6px) = 62px */}
                        <div className="absolute bottom-[62px] left-0 w-full border-t-2 border-dashed border-gray-600/50 -z-10 h-0"></div>

                        {sortedExperience.map((exp, index) => {
                            const isCurrent = exp.duration.toLowerCase().includes('present');

                            // Custom Gradient Definition
                            const customGradient = 'linear-gradient(135deg, #40ffaa, #4079ff)';

                            // Theme Logic
                            // If Current (Cognizant), use Custom Gradient and specific Hex Colors
                            // Gradient: Custom 5-stop
                            // Text: Mint (#40ffaa)
                            // Borders/Triangle: Mint (#40ffaa)
                            // Solids (Chip, Line, Square): Blue (#4079ff)

                            const currentCardStyle = { background: customGradient };
                            const currentTextStyle = 'text-[#40ffaa]';
                            const currentBorderStyle = 'border-t-[#40ffaa]';
                            const currentBorderTransparent = 'border-t-[#40ffaa]/80';

                            // Timeline Gradient Colors
                            const currentStartSquare = 'bg-[#40ffaa]';
                            const currentLineStyle = { background: 'linear-gradient(90deg, #40ffaa, #4079ff)' };
                            const currentEndSquare = 'bg-[#4079ff]';
                            const currentChipBg = 'bg-[#4079ff]';

                            // Past (Gray)
                            // Gradient: Gray
                            // Text: Gray-300
                            // Borders: Gray-400
                            // Solids: Gray-400
                            const pastCardClass = 'bg-gradient-to-br from-gray-700 to-gray-600';
                            const pastTextStyle = 'text-gray-300';
                            const pastBorderStyle = 'border-t-gray-400';
                            const pastBorderTransparent = 'border-t-gray-500/80';
                            const pastElementBg = 'bg-gray-400';

                            return (
                                <div key={index} className="flex flex-col items-center mx-4 group relative" style={{ minWidth: '280px' }}>

                                    {/* Glass Card (Replica of GlassIcons effect) */}
                                    <div className="mb-12 relative w-full h-[140px] perspective-[24em] group" style={{ perspective: '24em' }}>
                                        {/* Back Layer (Color/Gradient) */}
                                        <div
                                            className={`
                                                absolute inset-0 rounded-xl block transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[6deg] 
                                                group-hover:rotate-[12deg] group-hover:-translate-x-2 group-hover:-translate-y-2
                                                ${!isCurrent ? pastCardClass : ''}
                                            `}
                                            style={{
                                                boxShadow: '0.5em -0.5em 0.75em rgba(0,0,0,0.3)',
                                                ...(isCurrent ? currentCardStyle : {})
                                            }}
                                        ></div>

                                        {/* Front Layer (Glass Content) */}
                                        <div
                                            className="
                                                absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20
                                                transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%]
                                                group-hover:translate-z-8 group-hover:scale-105
                                                flex flex-col justify-center items-center p-4 text-center shadow-inner
                                            "
                                            style={{
                                                transformStyle: 'preserve-3d',
                                                boxShadow: '0 0 0 1px rgba(255,255,255,0.1) inset'
                                            }}
                                        >
                                            <h4 className="font-bold text-white text-lg tracking-wide drop-shadow-md">{exp.company}</h4>
                                            <div className={`mt-2 font-medium text-sm ${isCurrent ? currentTextStyle : pastTextStyle}`}>
                                                {exp.role}
                                            </div>
                                            <div className="mt-1 text-xs text-white/70">
                                                {getDuration(exp.duration)}
                                            </div>

                                            {/* Triangle Pointer (Attached to front layer) */}
                                            <div className={`
                                                absolute left-1/2 -translate-x-1/2 -bottom-[10px]
                                                w-0 h-0 
                                                border-l-[10px] border-l-transparent
                                                border-r-[10px] border-r-transparent
                                                border-t-[10px]
                                                ${isCurrent ? currentBorderTransparent : pastBorderTransparent}
                                            `}></div>
                                        </div>
                                    </div>

                                    {/* Timeline Segment */}
                                    <div className="w-full flex items-center justify-between relative z-10">
                                        {/* Start Square */}
                                        <div className={`w-3 h-3 ${isCurrent ? currentStartSquare : pastElementBg}`}></div>
                                        {/* Solid Line */}
                                        <div
                                            className={`h-1 flex-grow ${!isCurrent ? pastElementBg : ''}`}
                                            style={isCurrent ? currentLineStyle : {}}
                                        ></div>
                                        {/* End Square */}
                                        <div className={`w-3 h-3 ${isCurrent ? currentEndSquare : pastElementBg}`}></div>

                                        {/* Center Indicator Triangle (like in image) */}
                                        <div className={`
                                            absolute left-1/2 -translate-x-1/2 -top-[10px]
                                            w-0 h-0
                                            border-l-[6px] border-l-transparent
                                            border-r-[6px] border-r-transparent
                                            border-t-[8px]
                                            ${isCurrent ? currentBorderStyle : pastBorderStyle}
                                        `}></div>
                                    </div>

                                    {/* Dates */}
                                    {/* Enforce fixed height h-8 (32px) to ensure dashed line alignment stays constant */}
                                    <div className="w-full h-8 flex items-center justify-between mt-6 text-xs font-semibold text-text-secondary">
                                        <span>{getStartDate(exp.company, exp.duration)}</span>
                                        {isCurrent ? (
                                            <span className={`${currentChipBg} text-white px-2 py-1 rounded text-[10px] uppercase tracking-wider`}>Till Now</span>
                                        ) : (
                                            <span>{getEndDate(exp.company, exp.duration)}</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Vertical List (Original Implementation) */}
            <div className="mt-16 md:mt-24 relative border-l-2 border-glass-border ml-3 md:ml-6 space-y-12">
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
