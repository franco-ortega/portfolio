import React from 'react';
import ContinentPopUp from '../ContinentPopUp';
import ClosePopup from '../../buttons/ClosePopup';
import RootRPGSummary from '../../projects/RootRPG/RootRPGSummary';
import EbbSummary from '../../projects/Ebb/EbbSummary';
import styles from './ProjectsPopUp.module.scss';
import WeatherBeatsSummary from '../../projects/WeatherBeats/WeatherBeatsSummary';
import BeHumanSummary from '../../projects/BeHuman/BeHumanSummary';
import MajorArcanaSummary from '../../projects/MajorArcana/MajorArcanaSummary';

const ProjectsPopUp = () => {
  return (
    <ContinentPopUp>
      <div className={styles.ProjectsPopUp}>
        <ClosePopup path={''} />
        <header>
          <p>Projects</p>
        </header>
        <ul>
          <RootRPGSummary />
          <EbbSummary />
          <WeatherBeatsSummary />
          <BeHumanSummary />
          <MajorArcanaSummary />
        </ul>
      </div>
    </ContinentPopUp>
  );
};

export default ProjectsPopUp;
