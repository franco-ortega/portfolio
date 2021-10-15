import React from 'react';
import Projects from '../continents/Projects/Projects';
import Profile from '../continents/Profile/Profile';
import Resume from '../continents/Resume/Resume';
import Cartography from '../continents/Cartography/Cartography';
import IslandChain from '../islands/IslandChain';
import BorderCorner from '../mapElements/BorderCorner';
import { borderCornerData } from '../mapElements/borderCornerData';
import Legend from '../mapElements/Legend';
import Scale from '../mapElements/Scale';
import Compass from '../mapElements/Compass';
import styles from './Ocean.module.scss';

const Ocean = () => {
  return (
    <div className={styles.Ocean}>

      {/* Name & Title */}
      <header>
        <h1>Franco Ortega</h1>
        <h2>Full Stack Software Engineer</h2>
      </header>

      {/* Continents */}
      <Projects />
      <Profile />
      <Resume />
      <Cartography />

      {/* Islands */}
      <IslandChain />

      {/* Map Elements */}
      <Legend />
      <Scale />
      <Compass />

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

      
    </div>
  );
};

export default Ocean;
