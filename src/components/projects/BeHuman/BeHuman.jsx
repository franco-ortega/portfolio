import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import styles from './BeHuman.module.css';

const BeHuman = () => {
  return (
    <section className={styles.BeHuman}>
      <h2 className={styles.Title}>beHuman</h2>
      <div className={styles.Summary}>
        VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos.
      </div>
      <OpenDetails path={'behuman'} />
    </section>
  );
};

export default BeHuman;
