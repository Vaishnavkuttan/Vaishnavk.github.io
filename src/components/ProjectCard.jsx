import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import styles from './Work.module.css';

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className={styles.projectWrapper}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
        >
            <SpotlightCard className={styles.projectCard}>
                <div className={styles.cardHeader}>
                    <div className={styles.headerContent}>
                        <div className={styles.topRow}>
                            <span className={styles.companyBadge}>{project.company}</span>
                            <span className={styles.domainBadge}>{project.domain}</span>
                        </div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <p className={styles.roleTitle}>{project.role}</p>
                        <p className={styles.projectSummary}>{project.overview}</p>

                        {/* Tech Stack Pills - Visible always */}
                        <div className={styles.techStack}>
                            {project.technologies.slice(0, 6).map((tech, i) => (
                                <span key={i} className={styles.techPill}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.cardActions}>
                    <button
                        className={styles.expandBtn}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Close Case Study' : 'View Full Case Study'}
                        <i className={`ph ${isExpanded ? 'ph-caret-up' : 'ph-caret-down'}`}></i>
                    </button>
                    {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.actionLink}>
                            <i className="ph ph-github-logo"></i> Repo / Evidence
                        </a>
                    )}
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className={styles.detailsDraw}
                        >
                            <div className={styles.detailsGrid}>
                                {/* Leadership & Responsibilities */}
                                <div className={styles.detailSection}>
                                    <h4><i className="ph ph-users-three"></i> Role & Responsibilities</h4>
                                    <ul>
                                        {project.responsibilities.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technical & Cloud */}
                                <div className={styles.detailSection}>
                                    <h4><i className="ph ph-code"></i> Technical & Cloud Contributions</h4>
                                    <ul>
                                        {project.technical.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Automation */}
                                {(project.automation && project.automation.length > 0) && (
                                    <div className={styles.detailSection}>
                                        <h4><i className="ph ph-robot"></i> Automation Highlights</h4>
                                        <ul>
                                            {project.automation.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Outcomes */}
                                <div className={`${styles.detailSection} ${styles.outcomesSection}`}>
                                    <h4><i className="ph ph-trend-up"></i> Key Outcomes & Metrics</h4>
                                    <ul>
                                        {project.outcomes.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </SpotlightCard>
        </motion.div>
    );
};

export default ProjectCard;
