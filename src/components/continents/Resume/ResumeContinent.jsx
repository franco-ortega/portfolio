import React from 'react';
import styles from './ResumeContinent.module.scss';
import Continent from '../Continent';

const ResumeContinent = () => {
  return (
    <section className={styles.ResumeContinent}>
      <Continent path='/resume' title={'Resume'} />
    </section>
  );
};

export default ResumeContinent;
