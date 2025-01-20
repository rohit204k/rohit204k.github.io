import React, {useRef, useState} from 'react';

import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css'


export const ProjectCard = ({project : {title, imageSrc, description, skills, demo, source}}) => {
    return (
        <div className={styles.container}>
            <div className={styles.projectDetails}>
                <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {
                        skills.map((skill, id) => (
                            <li className={styles.skill} key={id}>{skill}</li>
                        ))}
                </ul>
            </div>
            <div className={styles.links}>
                <a className={styles.link} href={source}>Link</a>
            </div>
        </div>
    );
};