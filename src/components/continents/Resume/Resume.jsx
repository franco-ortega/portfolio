import React from 'react';
import resume from '../../../assets/FrancoOrtega_Resume.pdf';
import styles from './Resume.module.css';

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
