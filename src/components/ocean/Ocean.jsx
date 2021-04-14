import React from 'react';
import Projects from '../continents/Projects/Projects';
import Profile from '../continents/Profile/Profile';
import styles from './Ocean.module.css';
import Resume from '../continents/Resume/Resume';
import Scale from '../mapElements/Scale';
import BorderCorner from '../mapElements/BorderCorner';
import { borderCornerData } from '../mapElements/borderCornerData';

const Ocean = () => {
  return (
    <main className={styles.Ocean}>
      <div className={styles.OceanGrid}>

        {/* Top Left Corner */}
        {/* <div className={`${styles.OceanGridItem} ${styles.CornerNWContainer}`}>
          <div className={styles.CornerNW}></div>
        </div> */}
        <BorderCorner
          grid={borderCornerData.cornerNW.grid}
          shape={borderCornerData.cornerNW.shape}
        />

        {/* Top Right Corner */}
        {/* <div className={`${styles.OceanGridItem} ${styles.CornerNEContainer}`}>
          <div className={styles.CornerNE}></div>
        </div> */}
        <BorderCorner
          grid={borderCornerData.cornerNE.grid}
          shape={borderCornerData.cornerNE.shape}
        />

        {/* Bottom Left Corner */}
        {/* <div className={`${styles.OceanGridItem} ${styles.CornerSWContainer}`}>
          <div className={styles.CornerSW}></div>
        </div> */}
        <BorderCorner
          grid={borderCornerData.cornerSW.grid}
          shape={borderCornerData.cornerSW.shape}
        />


        {/* Bottom Right Corner */}
        {/* <div className={`${styles.OceanGridItem} ${styles.CornerSEContainer}`}>
          <div className={styles.CornerSE}></div>
        </div> */}
        <BorderCorner
          grid={borderCornerData.cornerSE.grid}
          shape={borderCornerData.cornerSE.shape}
        />


        {/* Name */}
        <div className={`${styles.OceanGridItem} ${styles.OceanGridName}`}>
          <p className={styles.Name}>Franco Ortega</p>
        </div>

        {/* Title */}
        <div className={`${styles.OceanGridItem} ${styles.OceanGridTitle}`}>
          <p className={styles.Title}>Full Stack Software Engineer</p>
          <p className={styles.Message}>&lowast; &lowast; &lowast; portfolio in progress &lowast; &lowast; &lowast;</p>
        </div>

        {/* Team Projects */}
        <Projects />

        {/* Profile */}
        <Profile />

        {/* Resume */}
        <Resume />

        {/* Scale */}
        <Scale />

        <div className={styles.OceanGridItem}></div>
      </div>
    </main>
  );
};

export default Ocean;
