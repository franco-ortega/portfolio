import React from 'react';
import { borderCornerData } from '../mapElements/borderCornerData';
import BorderCorner from '../mapElements/BorderCorner';
import Legend from '../mapElements/Legend';
import Scale from '../mapElements/Scale';
import Compass from '../mapElements/Compass';
import Projects from '../continents/Projects/Projects';
import Profile from '../continents/Profile/Profile';
import Resume from '../continents/Resume/Resume';
import Cartography from '../continents/Cartography/Cartography';
import GitHub from '../islands/GitHub';
import LinkedIn from '../islands/LinkedIn';
import Email from '../islands/Email';
import styles from './Ocean.module.scss';

const Ocean = () => {
  return (
    <div className={styles.OceanBorder}>
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
        <GitHub />
        <Email />
        <LinkedIn />

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
    </div>
  );
};

export default Ocean;
