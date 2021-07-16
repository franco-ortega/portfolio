import React from 'react';
import resume from '../../../assets/Franco_Ortega_Resume.pdf';
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
              <span className={styles.Text1}>Resume</span>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default Resume;
