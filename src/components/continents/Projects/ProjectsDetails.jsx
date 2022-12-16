import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ContinentDetails from '../ContinentDetails';
import ClosePopup from '../../buttons/ClosePopup';
import BeHuman from '../../projects/BeHuman/BeHuman';
// import ChooseGif from '../../projects/ChooseGif/ChooseGif';
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
        <section className={styles.ProjectsDisplayCase}>
          <section className={styles.Project}>
            <RootRPG />
          </section>
          <section className={styles.Project}>
            <Ebb />
          </section>
          <section className={styles.Project}>
            <WeatherBeats />
          </section>
          <section className={styles.Project}>
            <BeHuman />
          </section>
          {/* <section className={styles.Project}>
            <ChooseGif />
          </section> */}
          <section className={styles.Project}>
            <MajorArcana />
          </section>
        </section>
      </FocusOn>
    </ContinentDetails>
  );
};

export default ProjectsDetails;
