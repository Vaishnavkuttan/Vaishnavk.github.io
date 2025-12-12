import ProjectCard from './ProjectCard';

import styles from './Work.module.css';
import { projectsData } from '../data/projects';

const Work = () => {
    return (
        <section id="work" className={styles.workSection}>
            <div className={styles.container}>
                <div className={styles.sectionTitleWrapper}>
                    <h2 className={styles.sectionTitle}>Project Case Studies</h2>
                </div>

                <div className={styles.projectsList}>
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
