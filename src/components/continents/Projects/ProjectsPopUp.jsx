import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ContinentPopUp from '../ContinentPopUp';
import ClosePopup from '../../buttons/ClosePopup';
import BeHuman from '../../projects/BeHuman/BeHuman';
import Ebb from '../../projects/Ebb/Ebb';
import MajorArcana from '../../projects/MajorArcana/MajorArcana';
import WeatherBeats from '../../projects/WeatherBeats/WeatherBeats';
import styles from './ProjectsPopUp.module.scss';
import RootRPG from '../../projects/RootRPG/RootRPG';

const ProjectsPopUp = () => {
  let history = useHistory();

  return (
    <ContinentPopUp>
      <FocusOn
        onEscapeKey={() => history.push('/')}
        className={styles.ProjectsPopUp}
      >
        <ClosePopup path={''} />
        <header>
          <p>Projects</p>
        </header>
        <ul>
          <RootRPG />
          <Ebb />
          <Ebb />
          <Ebb />
          <Ebb />
          <Ebb />
          <WeatherBeats />
          <BeHuman />
          <MajorArcana />
        </ul>
      </FocusOn>
    </ContinentPopUp>
  );
};

export default ProjectsPopUp;
