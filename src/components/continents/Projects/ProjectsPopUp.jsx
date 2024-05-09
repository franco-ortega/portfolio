import React from 'react';
import PopUp from '../PopUp';
import RootRPGSummary from '../../projects/RootRPG/RootRPGSummary';
import GlowingColorsSummary from '../../projects/GlowingColors/GlowingColorsSummary';
import EbbSummary from '../../projects/Ebb/EbbSummary';
import WeatherBeatsSummary from '../../projects/WeatherBeats/WeatherBeatsSummary';
import BeHumanSummary from '../../projects/BeHuman/BeHumanSummary';
import MajorArcanaSummary from '../../projects/MajorArcana/MajorArcanaSummary';

import styles from './ProjectsPopUp.module.scss';

const ProjectsPopUp = () => {
  return (
    <PopUp>
      <div className={styles.ProjectsPopUp}>
        <header>
          <p>Projects</p>
        </header>
        <ul>
          <RootRPGSummary />
          <GlowingColorsSummary />
          <EbbSummary />
          <WeatherBeatsSummary />
          <BeHumanSummary />
          <MajorArcanaSummary />
        </ul>
      </div>
    </PopUp>
  );
};

export default ProjectsPopUp;
