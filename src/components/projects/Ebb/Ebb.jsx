import React from 'react';
import { useHistory } from 'react-router';
import styles from './Ebb.module.css';

const Ebb = () => {
  let history = useHistory();

  const onDetailsClick = () => {
    history.push('/ebb');
  };
  return (
    <section className={styles.Ebb}>
      <h2 className={styles.Title}>Ebb</h2>
      <div className={styles.Summary}>
      Chrome extension that reduces on-screen movement to increase website accessibility for users with sensory conditions.
      </div>
      <button onClick={onDetailsClick} className={styles.DetailsButton} >Click for project details.</button>
            
    </section>
  );
};

export default Ebb;
