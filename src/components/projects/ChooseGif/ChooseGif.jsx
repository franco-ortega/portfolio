import React from 'react';
import { useHistory } from 'react-router';
import styles from './ChooseGif.module.css';

const ChooseGif = () => {
  let history = useHistory();

  const onDetailsClick = () => {
    history.push('/choosegif');
  };

  return (
    <section className={styles.ChooseGif}>
      <h2 className={styles.Title}>Choose GIF</h2>
      <div className={styles.Summary}>
          Choose GIF displays real time trending GIFs, provides the ability to search for GIFs by category, and allows signed up users to save GIFs.
      </div>
      <button onClick={onDetailsClick} className={styles.DetailsButton} >Click for project details.</button>
    </section>
  );
};

export default ChooseGif;
