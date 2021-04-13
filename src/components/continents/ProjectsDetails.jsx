import React from 'react';
import { Link } from 'react-router-dom';
import WeatherBeats from '../projects/WeatherBeats';
// import PropTypes from 'prop-types';
import styles from './ProjectsDetails.module.css';

const ProjectsDetails = () => {
  return (
    <main className={styles.ProjectsDetails}>
      <section className={styles.OuterCoastline}>
        <section className={styles.InnerCoastline}>
          <section className={styles.Continent}>
            <header className={styles.Title}>Team Projects</header>
            <p className={styles.Intro}>
                These projects were completed remotely with 3-5 member teams over 5-10 day sprints.
            </p>
            <section className={styles.ProjectsDisplayCase}>
              <section className={styles.Project}>
                <WeatherBeats />
              </section>
              <section className={styles.Project}>
                beHuman
              </section>
              <section className={styles.Project}>
                Choose GIF
              </section>
              <section className={styles.Project}>
                Major Arcana Divinator
              </section>

            </section>
            <Link to="/">
              <button className={styles.Button} title="Close" name="Close" aria-label="Close">X</button>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
};

ProjectsDetails.propTypes = {

};

export default ProjectsDetails;
