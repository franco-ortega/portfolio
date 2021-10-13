import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import styles from './MajorArcana.module.scss';

const MajorArcana = () => {
  return (
    <section className={styles.MajorArcana}>
      <h2 className={styles.Title}>Major Arcana Divinator</h2>
      <div className={styles.Summary}>
        Allows the user to select a one-card or three-card tarot reading. Readings are stored and can be viewed later or deleted.
      </div>
      <OpenDetails path={'majorarcanadivinator'} />
    </section>
  );
};

export default MajorArcana;
