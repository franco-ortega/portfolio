import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">
              <button className={styles.Button}>X</button>
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
