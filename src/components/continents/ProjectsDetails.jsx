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
            <header className={styles.Header}>Team Projects</header>
            <h2>
                &lowast; &lowast; &lowast; coming soon &lowast; &lowast; &lowast;
            </h2>
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
