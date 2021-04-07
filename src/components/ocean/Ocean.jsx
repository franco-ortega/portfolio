import React from 'react';
// import ComingSoon from '../../comingSoon/ComingSoon';
import styles from './Ocean.module.css';

const Ocean = () => {
  return (
    <div className={styles.Ocean}>
      {/* <ComingSoon /> */}
      {/* <div className={styles.CornerNW}></div> */}
      {/* <div className={styles.CornerNE}></div> */}
      {/* <div className={styles.CornerSW}></div> */}
      {/* <div className={styles.CornerSE}></div> */}
      <div className={styles.OceanGrid}>

        {/* Top Left Corner */}
        <div className={styles.OceanGridItem}>
          <div className={styles.CornerNW}></div>
        </div>

        <div className={styles.OceanGridItem}></div>

        {/* Name */}
        <div className={`${styles.OceanGridItem} ${styles.OceanGridName}`}>
          <p className={styles.Name}>Franco Ortega</p>
        </div>

        {/* Title */}
        <div className={`${styles.OceanGridItem} ${styles.OceanGridTitle}`}>
          <p className={styles.Title}>Full Stack Software Engineer</p>
          <p className={styles.Message}>&lowast; &lowast; &lowast; portfolio coming soon &lowast; &lowast; &lowast;</p>
        </div>

        <div className={`${styles.OceanGridItem} ${styles.Test}`}></div>
        <div className={`${styles.OceanGridItem} ${styles.Test}`}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>


        {/* Top Right Corner */}
        <div className={`${styles.OceanGridItem} ${styles.CornerNEContainer}`}>
          <div className={styles.CornerNE}></div>
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
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>
        <div className={styles.OceanGridItem}></div>

        {/* Bottom Left Corner */}
        <div className={`${styles.OceanGridItem} ${styles.CornerSWContainer}`}>
          <div className={styles.CornerSW}></div>
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

        {/* Bottom Right Corner */}
        <div className={`${styles.OceanGridItem} ${styles.CornerSEContainer}`}>
          <div className={styles.CornerSE}></div>
        </div>


      </div>
    </div>
  );
};

export default Ocean;
