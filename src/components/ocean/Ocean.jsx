import React from 'react';
import Projects from '../continents/Projects/Projects';
import Profile from '../continents/Profile/Profile';
import Resume from '../continents/Resume/Resume';
import Scale from '../mapElements/Scale';
import BorderCorner from '../mapElements/BorderCorner';
import { borderCornerData } from '../mapElements/borderCornerData';
import styles from './Ocean.module.css';
import Legend from '../mapElements/Legend';
import IslandChain from '../islands/IslandChain';
import Compass from '../mapElements/Compass';
import Cartography from '../continents/Cartography/Cartography';

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
        <div className={styles.OceanGridHeader}>
          <h1 className={styles.Name}>Franco Ortega</h1>
          <h2 className={styles.Title}>Full Stack Software Engineer</h2>
        </div>

        {/* Map Elements */}
        <Legend />
        <Scale />
        <Compass />

        {/* Islands */}
        <IslandChain />

        {/* Continents */}
        <Projects />
        <Profile />
        <Resume />
        <Cartography />

      </section>
    </main>
  );
};

export default Ocean;
