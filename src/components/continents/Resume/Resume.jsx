import React from 'react';
import resume from '../../../assets/Resume_Franco_Ortega.pdf';
import styles from './Resume.module.scss';

const Resume = () => {
  return (
    <section className={styles.Resume}>
      <a href={resume}
        rel="noreferrer"
        target="_blank">
        <div className={styles.OuterCoastline}>
          <div className={styles.InnerCoastline}>
            <div className={styles.Continent}>
              Resume
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Resume;
