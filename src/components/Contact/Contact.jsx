import React from 'react'

import styles from './Contact.module.css'
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Reach out to me on</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:gundakallirohit@gmail.com" target="_blank">gundakallirohit@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin Icon" />
                    <a href="https://www.linkedin.com/in/rohit-gundakalli" target="_blank">linkedin.com/in/rohit-gundakalli/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/rohit204k" target="_blank">github.com/rohit204k</a>
                </li>
            </ul>
        </footer>
    )
}
