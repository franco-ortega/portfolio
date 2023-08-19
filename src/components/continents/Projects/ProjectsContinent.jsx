import React from 'react';
import styles from './ProjectsContinent.module.scss';
import Continent from '../Continent';

const ProjectsContinent = () => {
  return (
    <section className={styles.ProjectsContinent}>
      <Continent path='/projects' title={'Projects'} />
    </section>
  );
};

export default ProjectsContinent;
