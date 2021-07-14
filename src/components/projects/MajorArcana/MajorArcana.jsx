import React from 'react';
import styles from './MajorArcana.module.css';

import { useHistory } from 'react-router';

const MajorArcana = () => {
  let history = useHistory();

  const onDetailsClick = () => {
    history.push('/majorarcanadivinator');
  };

  return (
    <section className={styles.MajorArcana}>
      <h2 className={styles.Title}>Major Arcana Divinator</h2>
      <div className={styles.Summary}>
        Browser-based app that allows the user to select a one-card or three-card tarot reading. Readings are stored and can be viewed later as well.
      </div>
      <button onClick={onDetailsClick} className={styles.DetailsButton} >Click for project details.</button>
    </section>
  );
};

export default MajorArcana;
