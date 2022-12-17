import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import ClosePopup from '../../buttons/ClosePopup';
import EbbIcon from '../../../assets/ebbLogo.svg';
import styles from './EbbDetails.module.scss';
import ProjectLinks from '../../links/ProjectLinks';

const EbbDetails = () => {
  let history = useHistory();

  return (
    <FocusOn onEscapeKey={() => history.push('/projects')}>
      <main className={styles.EbbDetails}>
        <ClosePopup path={'projects'} background={'#F3F3F3'} color={'black'} />
        <div>
          <h2>
            <img className={styles.ProjectIcon} src={EbbIcon} alt='Ebb logo' />
          </h2>
          <h3>HTML | CSS | JavaScript | Chrome API</h3>
          <p className={styles.ProjectInfo}>
            Chrome extension that reduces on-screen movement to increase website
            accessibility for users with sensory conditions. I removed GIFs from
            view, stopped CSS animations, injected our code into websites across
            all browser tabs, and implemented the styling provided by our
            designer. Built with a cross-functional team employing the agile
            methodology across several weekly sprints.
          </p>
          <ProjectLinks
            website={
              'https://chrome.google.com/webstore/detail/ebb/madmcmnfddadihndjcofieeeenbndlil'
            }
            github={
              'https://github.com/Co-Lab-You-Belong-in-Tech/ebb-extension'
            }
          />
          {/* <p className={styles.ProjectLinks}>
            <span className={styles.Demo}>
              <a
                href='https://www.joincolab.io/projects/ebb'
                rel='noreferrer'
                target='_blank'
                className={styles.LinkText}
              >
                Demo
              </a>
            </span>
            <span>|</span>
            <span className={styles.Extension}>
              <a
                href='https://chrome.google.com/webstore/detail/ebb/madmcmnfddadihndjcofieeeenbndlil'
                rel='noreferrer'
                target='_blank'
                className={styles.LinkText}
              >
                Extension
              </a>
            </span>
            <span>|</span>
            <span className={styles.GitHub}>
              <a
                href='https://github.com/Co-Lab-You-Belong-in-Tech/ebb-extension'
                rel='noreferrer'
                target='_blank'
                className={styles.LinkText}
              >
                GitHub
              </a>
            </span>
          </p> */}
        </div>
      </main>
    </FocusOn>
  );
};

export default EbbDetails;
