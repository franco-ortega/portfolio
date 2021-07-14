import React from 'react';
import { Link } from 'react-router-dom';
import BeHuman from '../../projects/BeHuman/BeHuman';
import ChooseGif from '../../projects/ChooseGif/ChooseGif';
import MajorArcana from '../../projects/MajorArcana/MajorArcana';
import WeatherBeats from '../../projects/WeatherBeats/WeatherBeats';
import styles from './ProjectsDetails.module.css';

const ProjectsDetails = () => {
  return (
    <main className={styles.ProjectsDetails}>
      <Link to="/">
        <button className={styles.Button} title="Close" name="Close" aria-label="Close">X</button>
      </Link>
      
      <header className={styles.Header}>
        <p className={styles.Title}>
          Team Projects
        </p>
        <p className={styles.Intro}>
                  All projects were completed remotely with 3-5 member teams.
        </p>
      </header>
      <section className={styles.ProjectsDisplayCase}>
        <section className={styles.Project}>
          <WeatherBeats />
        </section>
        <section className={styles.Project}>
          <BeHuman />
        </section>
        <section className={styles.Project}>
          <ChooseGif />
        </section>
        <section className={styles.Project}>
          <ChooseGif />
        </section>
        <section className={styles.Project}>
          <MajorArcana />
        </section>
      </section>
            
    </main>
  );
};

export default ProjectsDetails;
