import React from 'react';
import Border from '../mapElements/border/Border';
import Compass from '../mapElements/Compass';
import Legend from '../mapElements/Legend';
import Scale from '../mapElements/Scale';
import Title from '../mapElements/title/Title';
import ProjectsContinent from '../continents/Projects/ProjectsContinent';
import ProfileContinent from '../continents/Profile/ProfileContinent';
import ResumeContinent from '../continents/Resume/ResumeContinent';
import Cartography from '../continents/Cartography/Cartography';
import Email from '../islands/Email';
import GitHub from '../islands/GitHub';
import LinkedIn from '../islands/LinkedIn';
import styles from './Ocean.module.scss';
import { borderCornerData } from '../mapElements/border/borderCornerData';
import BorderCorner from '../mapElements/border/BorderCorner';

const Ocean = () => {
  return (
    <Border>
      <div className={styles.Ocean}>
        {/* Name & Title */}
        <Title />

        {/* Continents */}
        <ProjectsContinent />
        <ProfileContinent />
        <ResumeContinent />
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
    </Border>
  );
};

export default Ocean;
