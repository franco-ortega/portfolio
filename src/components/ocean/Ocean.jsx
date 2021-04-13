import React from 'react';
// import Continent from '../continents/Continent';
// import { continentData } from '../continents/continentData';
// import resume from '../../assets/FrancoOrtega_Resume.pdf';
import Projects from '../continents/Projects';
import Profile from '../continents//Profile/Profile';
import styles from './Ocean.module.css';
import Resume from '../continents/Resume';
import Scale from '../mapElements/Scale';

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
        {/* <Continent
          grid={continentData.projects.grid}
          link={continentData.projects.link}
          shape={continentData.projects.shape}
          size={continentData.projects.size}
          title={continentData.projects.title}
        /> */}
        <Projects />

        {/* Profile */}
        {/* <Continent
          grid={continentData.profile.grid}
          link={continentData.profile.link}
          shape={continentData.profile.shape}
          size={continentData.profile.size}
          title={continentData.profile.title}
        /> */}
        <Profile />

        {/* Resume */}
        {/* <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className={styles.ResumeContainer}
        >
          <div className={styles.ResumeOuterCoastline}>
            <div className={styles.ResumeInnerCoastline}>
              <div className={styles.ResumeContinent}>
                Resume
              </div>
            </div>
          </div>
        </a> */}
        <Resume />

        {/* Scale */}
        <Scale />



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
