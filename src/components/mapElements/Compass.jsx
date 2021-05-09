import React from 'react';
import styles from './Compass.module.css';

const Compass = () => {
  return (
    <div className={styles.Compass}>
      

      <div className={styles.TopTriangle}></div>
      <div className={styles.BottomTriangle}></div>
      <div className={styles.LeftTriangle}></div>
      <div className={styles.RightTriangle}></div>

      {/* <div className={styles.InnerTriangle}></div> */}

      <div className={styles.CompassCircle}>
        <div className={styles.CompassCenter}></div>
      </div>

      <div className={styles.OuterCircle}>
        <div className={styles.MysteryCircle}></div>
      </div>


      {/* <div className={styles.GridItem}></div>
      <div className={styles.GridItem}></div>
      <div className={styles.GridItem}></div>
      <div className={styles.GridItem}></div>
      <div className={styles.GridItem}></div> */}
    </div>
  );
};

export default Compass;
