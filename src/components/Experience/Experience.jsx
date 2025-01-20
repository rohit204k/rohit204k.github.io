import React from 'react';

import styles from './Experience.module.css';
import { getImageUrl } from '../../utils';
import skills from '../../data/skills.json';
import experience from '../../data/experience.json';


export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div className={styles.skill} key={id}>
              <div className={styles.skillImage}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))
          }
        </div>
        <div className={styles.experience}>{
          experience.map((experienceItem, id) => (
            <div key={id} className={styles.experienceItem}>
              <div className={styles.experienceItemHeader}>
                <img src={getImageUrl(experienceItem.imageSrc)} alt={`${experienceItem.organisation} Logo`} />
                <div className={styles.experienceItemHeaderTitle}>
                  <h3>{`${experienceItem.role} at ${experienceItem.organisation}`}</h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                </div>
              </div>
              <div className={styles.experienceItemDetails}>
                <ul>
                  {
                    experienceItem.experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  );
}
