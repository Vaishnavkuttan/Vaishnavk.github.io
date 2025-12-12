import React from 'react';
import Section from '../ui/Section';
import { resumeData } from '../data/resume';
import { PiEnvelopeSimple as EnvelopeSimple, PiLinkedinLogo as LinkedinLogo, PiGithubLogo as GithubLogo, PiMapPin as MapPin } from 'react-icons/pi';

const Contact = () => {
    const { profile } = resumeData;

    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's connect and discuss quality engineering.">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-3xl border border-glass-border space-y-6">
                        <h3 className="text-2xl font-bold text-text-main">Contact Info</h3>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent-cyan/10 rounded-full text-accent-cyan">
                                <EnvelopeSimple size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-text-secondary">Email</div>
                                <a href={`mailto:${profile.email}`} className="text-text-main hover:text-accent-cyan transition-colors">{profile.email}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent-green/10 rounded-full text-accent-green">
                                <LinkedinLogo size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-text-secondary">LinkedIn</div>
                                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-accent-green transition-colors">vaishnav-kalaikumar</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-glass-bg rounded-full text-text-main">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-text-secondary">Location</div>
                                <div className="text-text-main">India</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Form */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm text-text-secondary ml-1">Name</label>
                            <input type="text" className="w-full bg-glass-bg border border-glass-border rounded-xl p-4 text-text-main focus:border-accent-cyan focus:outline-none transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-text-secondary ml-1">Email</label>
                            <input type="email" className="w-full bg-glass-bg border border-glass-border rounded-xl p-4 text-text-main focus:border-accent-cyan focus:outline-none transition-colors" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-text-secondary ml-1">Message</label>
                        <textarea rows="5" className="w-full bg-glass-bg border border-glass-border rounded-xl p-4 text-text-main focus:border-accent-cyan focus:outline-none transition-colors" placeholder="Your message..."></textarea>
                    </div>

                    <button className="w-full py-4 bg-accent-cyan text-black font-bold rounded-xl hover:bg-accent-cyan/90 transition-all shadow-[0_0_20px_rgba(0,201,255,0.3)] hover:shadow-[0_0_30px_rgba(0,201,255,0.5)] transform hover:-translate-y-1">
                        Send Message
                    </button>
                </form>

            </div>
        </Section>
    );
};

export default Contact;
