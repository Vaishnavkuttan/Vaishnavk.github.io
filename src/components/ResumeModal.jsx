
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PiX, PiFilePdf, PiFileDoc, PiDownloadSimple, PiEye } from 'react-icons/pi';
import { useTilt } from '../hooks/useTilt';
import resumePdf from '../assets/Vaishnav_Resume.pdf?url';
import resumeDoc from '../assets/Vaishnav_Resume.docx?url';

const ResumeModal = ({ isOpen, onClose }) => {
    const { ref, style, handleMouseMove, handleMouseLeave } = useTilt({
        sensitivity: 5, // Very subtle tilt to not disturb reading too much
        speed: 400,
        glare: true,
        maxGlare: 0.1
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-3xl h-[85vh] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4"
                    >
                        {/* Header */}
                        <div className="w-full flex justify-between items-center flex-shrink-0">
                            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Resume Preview</h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 transition-colors"
                            >
                                <PiX size={24} />
                            </button>
                        </div>

                        {/* Tilted Preview Card Container */}
                        <div className="relative w-full flex-grow flex justify-center perspective-1000 min-h-0 py-2">
                            <div
                                ref={ref}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    ...style,
                                    transformStyle: 'preserve-3d',
                                }}
                                className="relative w-full max-w-xl h-full bg-white rounded shadow-2xl overflow-hidden border border-slate-200"
                            >
                                {/* PDF Preview (iframe) - Interactive for scrolling */}
                                <iframe
                                    src={`${resumePdf} #toolbar = 0 & navpanes=0 & scrollbar=1 & view=FitH`}
                                    className="w-full h-full border-none"
                                    title="Resume Preview"
                                />

                                {/* Glare - Pointer events none to allow clicking through to iframe */}
                                <div
                                    className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.05) 100%)',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Download Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg flex-shrink-0">
                            <a
                                href={resumePdf}
                                download="Vaishnav_Resume.pdf"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl transition-all hover:-translate-y-1 shadow-lg group font-medium text-sm"
                            >
                                <PiFilePdf size={20} className="text-red-400" />
                                <span>DOWNLOAD PDF</span>
                            </a>
                            <a
                                href={resumeDoc}
                                download="Vaishnav_Resume.docx"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl transition-all hover:-translate-y-1 shadow-lg group font-medium text-sm"
                            >
                                <PiFileDoc size={20} className="text-blue-400" />
                                <span>DOWNLOAD DOCX</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ResumeModal;

