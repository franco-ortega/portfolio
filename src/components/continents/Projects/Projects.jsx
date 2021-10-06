import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.Projects}>
      <Link to="/projects">
        <div className={styles.OuterCoastline}>
          <div className={styles.InnerCoastline}>
            <div className={styles.Continent}>
              <p>Team</p>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Projects;
