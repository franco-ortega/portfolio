import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ContinentDetails from '../ContinentDetails';
import ClosePopup from '../../buttons/ClosePopup';
import BeHuman from '../../projects/BeHuman/BeHuman';
import Ebb from '../../projects/Ebb/Ebb';
import MajorArcana from '../../projects/MajorArcana/MajorArcana';
import WeatherBeats from '../../projects/WeatherBeats/WeatherBeats';
import styles from './ProjectsDetails.module.scss';
import RootRPG from '../../projects/RootRPG/RootRPG';

const ProjectsDetails = () => {
  let history = useHistory();

  return (
    <ContinentDetails>
      <FocusOn
        onEscapeKey={() => history.push('/')}
        className={styles.ProjectsDetails}
      >
        <ClosePopup path={''} />
        <header className={styles.Header}>
          <p className={styles.Title}>Projects</p>
        </header>
        <ul className={styles.ProjectsDisplayCase}>
          <RootRPG />
          <Ebb />
          <WeatherBeats />
          <BeHuman />
          <MajorArcana />
        </ul>
      </FocusOn>
    </ContinentDetails>
  );
};

export default ProjectsDetails;
