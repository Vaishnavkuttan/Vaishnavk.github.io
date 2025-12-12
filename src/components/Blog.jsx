import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import styles from './Blog.module.css';
import { blogData } from '../data/blog';

const Blog = () => {
    return (
        <section id="blog" className={styles.blogSection}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Insights & Articles
                </motion.h2>

                <div className={styles.blogGrid}>
                    {blogData.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className={styles.blogCard}>
                                <div className={styles.blogMeta}>
                                    <span>{post.date}</span>
                                    <span className={styles.dot}>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className={styles.blogTitle}>{post.title}</h3>
                                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                                <div className={styles.blogTags}>
                                    {post.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>#{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.readMore}>
                                    Read Article <i className="ph ph-arrow-right"></i>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
