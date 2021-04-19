import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MajorArcana.module.css';

const MajorArcana = () => {
  return (
    <main className={styles.MajorArcana}>
      <h2>Major Arcana Divinator</h2>
      <section className={styles.Summary}>
        Browser-based app that allows the user to select a one-card or three-card tarot reading. Readings are stored and can be viewed later as well.
      </section>
      <Link to="/majorarcanadivinator">
        <button className={styles.DetailsButton} aria-label="Project Details">Click for project details.</button>
      </Link>
    </main>
  );
};

export default MajorArcana;
