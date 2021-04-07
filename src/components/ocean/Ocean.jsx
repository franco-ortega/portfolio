import React from 'react';
import ComingSoon from '../../comingSoon/ComingSoon';
import styles from './Ocean.module.css';

const Ocean = () => {
  return (
    <div className={styles.Ocean}>
      <ComingSoon />
      <div className={styles.CornerNW}></div>
      <div className={styles.CornerNE}></div>
      <div className={styles.CornerSW}></div>
      <div className={styles.CornerSE}></div>
    </div>
  );
};

export default Ocean;
