import React from 'react';
import resume from '../../../assets/FrancoOrtega_Resume.pdf';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <main className={styles.Resume}>
      <a href={resume}
        rel="noreferrer"
        target="_blank">
        <section className={styles.OuterCoastline}>
          <section className={styles.InnerCoastline}>
            <section className={styles.Continent}>
              Resume
            </section>
          </section>
        </section>
      </a>
    </main>
  );
};

export default Resume;
