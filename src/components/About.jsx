
import React from 'react';
import Section from '../ui/Section';
import { resumeData } from '../data/resume';
import { PiChartLineUp as ChartLineUp, PiUsers as Users, PiLightning as Lightning } from 'react-icons/pi';
import LordIconElement from './ui/LordIconElement';
import GlareHover from './GlareHover';

const About = () => {
    const { profile } = resumeData;

    const stats = [
        {
            label: 'Years Experience',
            value: '6+',
            icon: ChartLineUp,
            isLordIcon: true,
            src: 'icons/growth.json',
            trigger: 'hover',
            colors: "primary:#ffffff,secondary:#40ffaa"
        },
        {
            label: 'Companies',
            value: '3',
            icon: Users,
            isLordIcon: true,
            src: 'icons/avatars.json',
            trigger: 'hover',
            colors: "primary:#ffffff,secondary:#40ffaa"
        },
        {
            label: 'Automation',
            value: 'Expert',
            icon: Lightning,
            isLordIcon: true,
            src: 'icons/flash.json',
            trigger: 'in-reveal',
            colors: "primary:#ffffff,secondary:#40ffaa"
        },
    ];

    return (
        <Section id="about" title="About Me" subtitle="A brief introduction to my professional journey.">
            <div className="grid md:grid-cols-3 gap-12 items-center">

                {/* Bio Text */}
                <div className="md:col-span-2 space-y-6 text-lg text-text-secondary leading-relaxed glass p-8 rounded-3xl border border-glass-border">
                    <p className="text-text-main font-semibold text-xl">
                        {profile.title}
                    </p>
                    <p>
                        {profile.summary}
                    </p>
                    <p>
                        I specialize in building robust automation frameworks and ensuring the highest quality for enterprise-level applications. My passion lies in leveraging modern tools like GitHub Copilot to accelerate testing workflows and achieve record-breaking efficiency.
                    </p>
                </div>

                {/* Quick Stats Cards */}
                <div className="flex flex-col gap-4">
                    {stats.map((stat, idx) => (
                        <GlareHover
                            key={idx}
                            width="100%"
                            height="auto"
                            borderRadius="16px"
                            background="rgba(255, 255, 255, 0.05)"
                            className="p-6 transition-colors border border-glass-border group"
                        >
                            <div className="flex items-center gap-4 w-full">
                                <div className="p-3 bg-accent-cyan/10 rounded-full text-accent-cyan flex items-center justify-center shrink-0">
                                    {stat.isLordIcon ? (
                                        <LordIconElement
                                            src={`${import.meta.env.BASE_URL}${stat.src}`}
                                            trigger={stat.trigger}
                                            size={32}
                                            colors={stat.colors}
                                        />
                                    ) : (
                                        <stat.icon size={32} weight="duotone" />
                                    )}
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-text-main">{stat.value}</div>
                                    <div className="text-sm text-text-secondary">{stat.label}</div>
                                </div>
                            </div>
                        </GlareHover>
                    ))}
                </div>

            </div>
        </Section>
    );
};



export default About;
