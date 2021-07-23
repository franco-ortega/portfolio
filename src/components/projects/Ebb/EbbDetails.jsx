import React from 'react';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import EbbIcon from '../../../assets/ebbLogo.svg';
import styles from './EbbDetails.module.css';

const EbbDetails = () => {
  return (
    <FocusOn>
      <main className={styles.EbbDetails}>
        <ClosePopup
          path={'projects'}
          background={'#F3F3F3'}
          color={'black'}
        />
        <section className={styles.Project}>
          <img
            className={styles.ProjectIcon}
            src={EbbIcon}
            alt="Ebb logo"
          />
          <p className={styles.ProjectTech}>HTML | CSS | JavaScript | Chrome API</p>
          <p className={styles.ProjectInfo}>
        Chrome extension that reduces on-screen movement to increase website accessibility for users with sensory conditions. I removed GIFs from view, stopped CSS animations, injected our code into websites across all browser tabs, and implemented the styling provided by our designer. Built with a cross-functional team employing the agile methodology across several weekly sprints.
          </p>
          <p className={styles.ProjectLinks}>
            <span className={styles.Demo}>
              <a href="https://www.joincolab.io/projects/ebb" rel="noreferrer" target="_blank" className={styles.LinkText}>Demo</a>
            </span>
            <span>|</span>
            <span className={styles.Extension}>
              <a href="https://chrome.google.com/webstore/detail/ebb/madmcmnfddadihndjcofieeeenbndlil" rel="noreferrer" target="_blank" className={styles.LinkText}>Extension</a>
            </span>
            <span>|</span>
            <span className={styles.GitHub}>
              <a href="https://github.com/Co-Lab-You-Belong-in-Tech/ebb-extension" rel="noreferrer" target="_blank" className={styles.LinkText}>GitHub</a>
            </span>
          </p>
        </section>
      </main>
    </FocusOn>
  );
};

export default EbbDetails;
