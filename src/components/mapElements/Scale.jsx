import React from 'react';
import styles from './Scale.module.css';

const Scale = () => {
  return (
    <div className={styles.ScaleContainer} title="scale">
      <div>
        <div className={`${styles.ScaleNumber} ${styles.ScaleNumberFirst}`}>0</div>
        <div className={`${styles.ScaleBlockBlack} ${styles.ScaleBlockFirst}`}></div>
      </div>
      <div>
        <div className={styles.ScaleNumber}>10</div>
        <div className={styles.ScaleBlockWhite}></div>
      </div>
      <div>
        <div className={styles.ScaleNumber}>20</div>
        <div className={styles.ScaleBlockBlack}></div>
      </div>
      <div>
        <div className={styles.ScaleNumber}>30</div>
        <div className={styles.ScaleBlockWhite}></div>
      </div>
      <div>
        <div className={styles.ScaleNumber}>40</div>
        <div className={styles.ScaleBlockBlack}></div>
      </div>
      <div>
        <div className={styles.ScaleNumber}>50</div>
        <div className={styles.ScaleBlockWhite}></div>
      </div>
      <div>
        <div className={styles.ScaleNumber}>60</div>
        <div className={`${styles.ScaleBlockBlack} ${styles.ScaleBlockLast}`}></div>
      </div>
      <div>
        <div className={styles.ScaleNumber}>70</div>
      </div>
    </div>
  );
};

export default Scale;
