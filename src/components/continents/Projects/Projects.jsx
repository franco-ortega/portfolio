import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section className={styles.Projects}>
      <Link to="/projects">
        <div className={styles.OuterCoastline}>
          <div className={styles.InnerCoastline}>
            <div className={styles.Continent}>
              Team Projects
              {/* <span className={styles.Text1}>Team Projects</span> */}
              {/* <span className={styles.Text2}>Projects</span> */}
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Projects;
