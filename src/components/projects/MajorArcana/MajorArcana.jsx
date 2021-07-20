import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import styles from './MajorArcana.module.css';

const MajorArcana = () => {
  return (
    <section className={styles.MajorArcana}>
      <h2 className={styles.Title}>Major Arcana Divinator</h2>
      <div className={styles.Summary}>
        Browser-based app that allows the user to select a one-card or three-card tarot reading. Readings are stored and can be viewed later as well.
      </div>
      <OpenDetails path={'majorarcanadivinator'} />
    </section>
  );
};

export default MajorArcana;
