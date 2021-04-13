import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChooseGif.module.css';

const ChooseGif = () => {
  return (
    <main className={styles.ChooseGif}>
      <h2>Choose GIF</h2>
      <section className={styles.Summary}>
          Browser-based app that displays real time trending GIFs, provides the ability to search for GIFs by category, and allows users to sign up and save GIFs.
      </section>
      <Link to="/choosegif">
        <button className={styles.DetailsButton} aria-label="Project Details">Click for project details.</button>
      </Link>
    </main>
  );
};

export default ChooseGif;
