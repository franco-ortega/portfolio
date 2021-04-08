import React from 'react';
import Continent from '../continents/Continent';
// import ComingSoon from '../../comingSoon/ComingSoon';
import { continentData } from '../continents/continentData';
import styles from './Ocean.module.css';

const Ocean = () => {
  return (
    <div className={styles.Ocean}>
      <div className={styles.OceanGrid}>

        {/* Top Left Corner */}
        <div className={`${styles.OceanGridItem} ${styles.CornerNWContainer}`}>
          <div className={styles.CornerNW}></div>
        </div>

        {/* Top Right Corner */}
        <div className={`${styles.OceanGridItem} ${styles.CornerNEContainer}`}>
          <div className={styles.CornerNE}></div>
        </div>

        {/* Bottom Left Corner */}
        <div className={`${styles.OceanGridItem} ${styles.CornerSWContainer}`}>
          <div className={styles.CornerSW}></div>
        </div>

        {/* Bottom Right Corner */}
        <div className={`${styles.OceanGridItem} ${styles.CornerSEContainer}`}>
          <div className={styles.CornerSE}></div>
        </div>




        <div className={styles.OceanGridItem}></div>

        {/* Name */}
        <div className={`${styles.OceanGridItem} ${styles.OceanGridName}`}>
          <p className={styles.Name}>Franco Ortega</p>
        </div>

        {/* Title */}
        <div className={`${styles.OceanGridItem} ${styles.OceanGridTitle}`}>
          <p className={styles.Title}>Full Stack Software Engineer</p>
          <p className={styles.Message}>&lowast; &lowast; &lowast; portfolio in progress &lowast; &lowast; &lowast;</p>
        </div>

        <Continent
          title={continentData.projects.title}
          shape={continentData.projects.shape}
          size={continentData.projects.size}
          grid={continentData.projects.grid}
        />

        <Continent
          title={continentData.profile.title}
          shape={continentData.profile.shape}
          size={continentData.profile.size}
          grid={continentData.profile.grid}
        />


        <div className={`${styles.OceanGridItem} ${styles.Test}`}></div>
        <div className={`${styles.OceanGridItem} ${styles.Test}`}></div>
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
