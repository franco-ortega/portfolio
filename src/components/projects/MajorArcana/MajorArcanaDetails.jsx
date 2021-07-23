import React from 'react';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import MajorArcanaIcon from '../../../assets/MajorArcana.png';
import styles from './MajorArcanaDetails.module.css';

const MajorArcanaDetails = () => {
  return (
    <FocusOn>
      <main className={styles.MajorArcanaDetails}>
        <ClosePopup
          path={'projects'}
          background={'#E4A77B'}
          color={'black'}
        />
        <section className={styles.Project}>
          <h1 className={styles.ProjectTitle}>Major Arcana Divinator</h1>
          <p className={styles.ProjectTech}>HTML | CSS | JavaScript</p>
          <p className={styles.ProjectInfo}>
          Browser-based app that allows the user to select a one-card or three-card tarot reading. The cards of a reading and the corresponding timestamp are saved in local storage. The user may look back on their readings or delete them. My responsibilities focused on creating and displaying the time stamp as well as rendering the cards from local storage onto the browser.
          </p>
          <p className={styles.ProjectLinks}>
            <span className={styles.Extension}>
              <a href="https://mystechal-divinators.github.io/project-week-tarot-divinators/" rel="noreferrer" target="_blank" className={styles.LinkText}>Website</a>
            </span>
            <span>|</span>
            <span className={styles.GitHub}>
              <a href="https://github.com/Mystechal-Divinators/project-week-tarot-divinators" rel="noreferrer" target="_blank" className={styles.LinkText}>GitHub</a>
            </span>
          </p>
          <img
            src={MajorArcanaIcon}
            alt="Three tarot cards."
            className={styles.ProjectIcon}
          />
        </section>
      </main>
    </FocusOn>
  );
};

export default MajorArcanaDetails;
