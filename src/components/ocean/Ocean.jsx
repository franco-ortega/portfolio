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
      <section className={styles.OceanGrid}>

        {/* Border Corners */}
        <BorderCorner
          grid={borderCornerData.cornerNW.grid}
          shape={borderCornerData.cornerNW.shape}
        />
        <BorderCorner
          grid={borderCornerData.cornerNE.grid}
          shape={borderCornerData.cornerNE.shape}
        />
        <BorderCorner
          grid={borderCornerData.cornerSW.grid}
          shape={borderCornerData.cornerSW.shape}
        />
        <BorderCorner
          grid={borderCornerData.cornerSE.grid}
          shape={borderCornerData.cornerSE.shape}
        />

        {/* Name & Title */}
        <div className={`${styles.OceanGridItem} ${styles.OceanGridName}`}>
          <p className={styles.Name}>Franco Ortega</p>
        </div>
        <div className={`${styles.OceanGridItem} ${styles.OceanGridTitle}`}>
          <p className={styles.Title}>Full Stack Software Engineer</p>
          <p className={styles.Message}>&lowast; &lowast; &lowast; portfolio in progress &lowast; &lowast; &lowast;</p>
        </div>

        {/* Continents */}
        <Projects />
        <Profile />
        <Resume />

        {/* Scale */}
        <Scale />

        {/* <div className={styles.OceanGridItem}></div> */}
      </section>
    </main>
  );
};

export default Ocean;
