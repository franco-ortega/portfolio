import React from 'react';
import styles from './Compass.module.scss';

const Compass = () => {
  return (
    <div className={styles.Compass}>
      <div className={styles.TopTriangle}></div>
      <div className={styles.BottomTriangle}></div>
      <div className={styles.LeftTriangle}></div>
      <div className={styles.RightTriangle}></div>*{' '}
      <div className={styles.CornerPointers}></div> */}
      <div className={styles.OuterRingContainer}>
        <div className={styles.OuterRing}>
          <div className={styles.OuterCircle}>
            <div className={styles.InnerRing}>
              <div className={styles.InnerCircle}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compass;
