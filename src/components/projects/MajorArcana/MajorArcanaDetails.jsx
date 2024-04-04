import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import MajorArcanaIcon from '../../../assets/MajorArcana.png';
import styles from './MajorArcanaDetails.module.scss';
import ProjectLinks from '../../links/ProjectLinks';

const MajorArcanaDetails = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/projects')}>
      <main className={styles.MajorArcanaDetails}>
        <ClosePopup path={'projects'} background={'#E4A77B'} color={'black'} />
        <div className={styles.Project}>
          <h2 className={styles.ProjectTitle}>Major Arcana Divinator</h2>
          <h3 className={styles.ProjectTech}>HTML | CSS | JavaScript</h3>
          <p className={styles.ProjectInfo}>
            Browser-based app that allows the user to select a one-card or
            three-card tarot reading. The cards of a reading and the
            corresponding timestamp are saved in local storage. The user may
            look back on their readings or delete them. My responsibilities
            focused on creating and displaying the time stamp as well as
            rendering the cards from local storage onto the browser.
          </p>
          <ProjectLinks
            website={
              'https://mystechal-divinators.github.io/project-week-tarot-divinators/'
            }
            github={
              'https://github.com/Mystechal-Divinators/project-week-tarot-divinators'
            }
          />
          <img
            src={MajorArcanaIcon}
            alt='Three tarot cards.'
            className={styles.ProjectIcon}
          />
        </div>
      </main>
    </FocusOn>
  );
};

export default MajorArcanaDetails;
