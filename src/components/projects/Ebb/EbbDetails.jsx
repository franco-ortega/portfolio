import React from 'react';
import ClosePopup from '../../buttons/ClosePopup';
import EbbIcon from '../../../assets/ebbLogo.svg';
import styles from './EbbDetails.module.scss';
import ProjectLinks from '../../links/ProjectLinks';
import ProjectDetails from '../ProjectDetails';

const EbbDetails = () => {
  return (
    <ProjectDetails>
      <div className={styles.EbbDetails}>
        <ClosePopup path={'projects'} background={'#F3F3F3'} color={'black'} />

        <h3>
          <img className={styles.ProjectIcon} src={EbbIcon} alt='Ebb logo' />
        </h3>
        <h4>HTML | CSS | JavaScript | Chrome API</h4>
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
          github={'https://github.com/Co-Lab-You-Belong-in-Tech/ebb-extension'}
        />
      </div>
    </ProjectDetails>
  );
};

export default EbbDetails;
