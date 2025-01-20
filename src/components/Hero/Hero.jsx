import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hey, I'm Rohit.</h1>
                <p className={styles.description}>I'm a Full Stack Developer with a master's degree in Computer Science and 3 years of experience in Software Development.</p>
                <a className={styles.contactBtn} href="mailto:gundakallirohit@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/bioPhoto.jpeg")} alt="Hero" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>

        </section>
    );
}
