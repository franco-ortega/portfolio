import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import styles from './Ebb.module.css';

const Ebb = () => {
  return (
    <section className={styles.Ebb}>
      <h2 className={styles.Title}>Ebb</h2>
      <div className={styles.Summary}>
      Chrome extension that reduces on-screen movement to increase website accessibility for users with sensory conditions.
      </div>
      <OpenDetails path={'ebb'} />
    </section>
  );
};

export default Ebb;
