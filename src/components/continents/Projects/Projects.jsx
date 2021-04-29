import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <main className={styles.Projects}>
      <Link to="/projects">
        <section className={styles.OuterCoastline}>
          <section className={styles.InnerCoastline}>
            <section className={styles.Continent}>
              Team Projects
            </section>
          </section>
        </section>
      </Link>
    </main>
  );
};

export default Projects;
