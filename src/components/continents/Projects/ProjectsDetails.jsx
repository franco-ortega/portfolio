import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import BeHuman from '../../projects/BeHuman/BeHuman';
import ChooseGif from '../../projects/ChooseGif/ChooseGif';
import Ebb from '../../projects/Ebb/Ebb';
import MajorArcana from '../../projects/MajorArcana/MajorArcana';
import WeatherBeats from '../../projects/WeatherBeats/WeatherBeats';
import styles from './ProjectsDetails.module.css';

const ProjectsDetails = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/')}>
      <main className={styles.ProjectsDetails}>
        <ClosePopup path={''}/>
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
            <Ebb />
          </section>
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
            <MajorArcana />
          </section>
        </section>
      </main>
    </FocusOn>
  );
};

export default ProjectsDetails;
