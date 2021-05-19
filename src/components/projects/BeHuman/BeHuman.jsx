import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BeHuman.module.css';

const BeHuman = () => {
  return (
    <section className={styles.BeHuman}>
      <h2 className={styles.Title}>beHuman</h2>
      <div className={styles.Summary}>
        beHuman is a VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos.
      </div>
      <div className={styles.ButtonContainer}>
        <Link to="/behuman">
          <button className={styles.DetailsButton} aria-label="Project Details">Click for project details.</button>
        </Link>
      </div>
    </section>
  );
};

export default BeHuman;
