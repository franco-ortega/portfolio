import React from 'react';
import Border from '../mapElements/border/Border';
import Compass from '../mapElements/compass/Compass';
import Legend from '../mapElements/legend/Legend';
import Scale from '../mapElements/scale/Scale';
import Title from '../mapElements/title/Title';
import ProjectsContinent from '../continents/Projects/ProjectsContinent';
import ProfileContinent from '../continents/Profile/ProfileContinent';
import ResumeContinent from '../continents/Resume/ResumeContinent';
import CartographyContinent from '../continents/Cartography/CartographyContinent';
import Email from '../islands/Email';
import GitHub from '../islands/GitHub';
import LinkedIn from '../islands/LinkedIn';
import styles from './Ocean.module.scss';

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
        <CartographyContinent />

        {/* Islands */}
        <GitHub />
        <Email />
        <LinkedIn />

        {/* Map Elements */}
        <Legend />
        <Scale />
        <Compass />
      </div>
    </Border>
  );
};

export default Ocean;
