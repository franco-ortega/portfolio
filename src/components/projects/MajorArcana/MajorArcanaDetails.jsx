import React from 'react';
import MajorArcanaIcon from '../../../assets/MajorArcana.png';
import ProjectDetails from '../ProjectDetails';
import ClosePopup from '../../buttons/ClosePopup';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './MajorArcanaDetails.module.scss';

const MajorArcanaDetails = () => {
  return (
    <ProjectDetails>
      <div className={styles.MajorArcanaDetails}>
        <ClosePopup
          path={'projects'}
          background={'var(--gold-dark)'}
          color={'var(--black-one)'}
        />
        <h3>Major Arcana Divinator</h3>
        <h4>HTML | CSS | JavaScript</h4>
        <p>
          Browser-based app that allows the user to select a one-card or
          three-card tarot reading. The cards of a reading and the corresponding
          timestamp are saved in local storage. The user may look back on their
          readings or delete them. My responsibilities focused on creating and
          displaying the time stamp as well as rendering the cards from local
          storage onto the browser.
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
    </ProjectDetails>
  );
};

export default MajorArcanaDetails;
