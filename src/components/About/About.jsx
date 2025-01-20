import React from 'react';

import styles from './About.module.css';
import { getImageUrl, getFile } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <div className={styles.contentDetails}>
                <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/graduationCapIcon.png")} alt="Graduation Cap Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Academics</h3>
                            <p>I’m a recent graduate with a Master’s in Computer Science from the University of Massachusetts Amherst. Throughout my academic journey, I developed a solid foundation in core areas such as Data Structures, Algorithms, Machine Learning, and Cloud Systems. During my time at UMass, I specialized in advanced topics like Natural Language Processing, Reinforcement Learning, and Distributed Systems.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/experienceIcon.png")} alt="Experience Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Experience</h3>
                            <p>I have 3 years of experience in software development, working on innovative projects and enhancing my technical skills at Wow Labz Pvt. Ltd. and Ellucian. I’m passionate about leveraging cutting-edge technologies, including Python, Kafka, and AWS, to drive impactful solutions.</p>
                        </div>
                    </li>
                </ul>
                </div>
                <a className={styles.resumeBtn} target="_blank" href={getFile('resume.pdf')}>Resume</a>
            </div>
        </section>
    )
}
