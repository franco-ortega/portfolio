import React from 'react';
import { useHistory } from 'react-router';
import styles from './BeHuman.module.css';

const BeHuman = () => {
  let history = useHistory();

  const onDetailsClick = () => {
    history.push('/behuman');
  };

  return (
    <section className={styles.BeHuman}>
      <h2 className={styles.Title}>beHuman</h2>
      <div className={styles.Summary}>
        beHuman is a VSCode extension that prompts users to take breaks with an hourly pop-up that provides wellness tips and movement videos.
      </div>
      <button onClick={onDetailsClick} className={styles.DetailsButton} >Click for project details.</button>
    </section>
  );
};

export default BeHuman;
