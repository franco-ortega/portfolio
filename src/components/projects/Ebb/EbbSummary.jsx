import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import ProjectSummary from '../ProjectSummary';
import styles from './EbbSummary.module.scss';

const EbbSummary = () => {
  return (
    <ProjectSummary>
      <div className={styles.EbbSummary}>
        <h2>Ebb</h2>
        <div>
          <p>
            Chrome extension that increases accessibility for users with sensory
            conditions by reducing on-screen movement.
          </p>
          <ProjectLinks
            website={
              'https://chrome.google.com/webstore/detail/ebb/madmcmnfddadihndjcofieeeenbndlil'
            }
            github={
              'https://github.com/Co-Lab-You-Belong-in-Tech/ebb-extension'
            }
          />
        </div>
        <OpenDetails path={'ebb'} />
      </div>
    </ProjectSummary>
  );
};

export default EbbSummary;
