import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChooseGif.module.css';

const ChooseGif = () => {
  return (
    <section className={styles.ChooseGif}>
      <h2 className={styles.Title}>Choose GIF</h2>
      <div className={styles.Summary}>
          Choose GIF displays real time trending GIFs, provides the ability to search for GIFs by category, and allows signed up users to save GIFs.
      </div>
      <div className={styles.ButtonContainer}>
        <Link to="/choosegif">
          <button className={styles.DetailsButton} aria-label="Project Details">Click for project details.</button>
        </Link>
      </div>
    </section>
  );
};

export default ChooseGif;
