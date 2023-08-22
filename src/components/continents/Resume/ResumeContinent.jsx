import React from 'react';
import resume from '../../../assets/Resume_Franco_Ortega.pdf';
import Continent from '../Continent';
import styles from './ResumeContinent.module.scss';

const ResumeContinent = () => {
  return (
    <section className={styles.ResumeContinent}>
      <Continent path={resume} title={'Resume'} />
    </section>
  );
};

export default ResumeContinent;
