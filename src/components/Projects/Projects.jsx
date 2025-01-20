import React, { useRef } from 'react';

import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';
import { getImageUrl } from '../../utils';

const PROJECT_CARD_WIDTH = 345;
const GAP = 15
const SCROLL_AMOUNT = PROJECT_CARD_WIDTH + GAP;


export const Projects = () => {
  const projectsContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (projectsContainerRef.current) {
      const scrollAmount = direction === 'right' ? SCROLL_AMOUNT : -SCROLL_AMOUNT;
      projectsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.carouselWrapper}>
        <div className={styles.projects} ref={projectsContainerRef}>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
        <div className={styles.arrow} onClick={() => handleScroll('left')}>
          <img src={getImageUrl("projects/scrollLeft.svg")} alt="Scroll Left" className={styles.icon} />
        </div>
        <div className={styles.arrow} onClick={() => handleScroll('right')}>
          <img src={getImageUrl("projects/scrollRight.svg")} alt="Scroll Right" className={styles.icon} />
        </div>
      </div>
    </section>
  )
}
