import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import styles from './ChooseGif.module.scss';

const ChooseGif = () => {
  return (
    <section className={styles.ChooseGif}>
      <h2 className={styles.Title}>Choose GIF</h2>
      <div className={styles.Summary}>
          Displays real time trending GIFs, provides the ability to search for GIFs by category, and allows signed up users to save GIFs.
      </div>
      <OpenDetails path={'choosegif'} />
    </section>
  );
};

export default ChooseGif;
