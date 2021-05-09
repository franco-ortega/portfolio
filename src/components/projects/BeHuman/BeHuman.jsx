import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BeHuman.module.css';

const BeHuman = () => {
  return (
    <main className={styles.BeHuman}>
      <h2 className={styles.Title}>beHuman</h2>
      <section className={styles.Summary}>
        beHuman is a VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos.
      </section>
      <section className={styles.ButtonContainer}>
        <Link to="/behuman">
          <button className={styles.DetailsButton} aria-label="Project Details">Click for project details.</button>
        </Link>
      </section>
    </main>
  );
};

export default BeHuman;
