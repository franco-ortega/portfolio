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

const Ocean = () => {
  return (
    <div className={styles.OceanBorder}>
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
        <Border />
      </div>
    </div>
  );
};

export default Ocean;
