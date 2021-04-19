import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsDetails from '../../continents/Projects/ProjectsDetails';
import MajorArcanaIcon from '../../../assets/MajorArcana.png';
import styles from './MajorArcanaDetails.module.css';

const MajorArcanaDetails = () => {
  return (
    <>
      <ProjectsDetails />
      <main className={styles.MajorArcanaDetails}>
        <section className={styles.ButtonContainer}>
          <Link to="/projects">
            <button className={styles.CloseButton} aria-label="Close">X</button>
          </Link>
        </section>
        <h1>Major Arcana Divinator</h1>
        <h2 className={styles.ProjectTech}>HTML | CSS | JavaScript</h2>
        <section className={styles.ProjectInfo}>
        Browser-based app that allows the user to select a one-card or three-card tarot reading. The cards of a reading and the corresponding timestamp are saved in local storage. The user may look back on their readings or delete them. My responsibilities focused on creating and displaying the time stamp as well as rendering the cards from local storage onto the browser.
        </section>
        <section className={styles.ProjectLinks}>
          <a href="https://mystechal-divinators.github.io/project-week-tarot-divinators/" rel="noreferrer" target="_blank" className={styles.LinkText}>Website</a>
          <img
            src={MajorArcanaIcon}
            alt="Rotating cube that displays a gif on each side."
            className={styles.ProjectIcon}
          />
          <a href="https://github.com/Mystechal-Divinators/project-week-tarot-divinators" rel="noreferrer" target="_blank" className={styles.LinkText}>GitHub</a>
        </section>
      </main>
    </>
  );
};

export default MajorArcanaDetails;
