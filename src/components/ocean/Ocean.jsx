import React from 'react';
// import ComingSoon from '../../comingSoon/ComingSoon';
import styles from './Ocean.module.css';

const Ocean = () => {
  return (
    <div className={styles.Ocean}>
      {/* <ComingSoon /> */}
      <div className={styles.CornerNW}></div>
      <div className={styles.CornerNE}></div>
      <div className={styles.CornerSW}></div>
      <div className={styles.CornerSE}></div>
      <div className={styles.OceanGrid}>

        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={`${styles.OceanGridItem} ${styles.OceanGridName}`}>
          <h1>Franco Ortega</h1>
          <h3>Full Stack Software Engineer</h3>
          <h4>&lowast; &lowast; &lowast; portfolio coming soon &lowast; &lowast; &lowast;</h4>
        </div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>

      </div>
    </div>
  );
};

export default Ocean;
