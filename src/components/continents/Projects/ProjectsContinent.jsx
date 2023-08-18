import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './ProjectsContinent.module.scss';
import Continent from '../Continent';

const ProjectsContinent = () => {
  return (
    <section className={styles.ProjectsContinent}>
      <Continent
        borderShape={{ borderRadius: '84vw 75vw 51vw 38vw' }}
        path='/projects'
        title={'Projects'}
      />
    </section>
  );
};

export default ProjectsContinent;
