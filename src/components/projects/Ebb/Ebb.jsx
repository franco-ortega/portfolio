import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import styles from './Ebb.module.scss';

const Ebb = () => {
  return (
    <li className={styles.Ebb}>
      <h2 className={styles.Title}>Ebb</h2>
      <div className={styles.Summary}>
        <p>
          Chrome extension that increases accessibility for users with sensory
          conditions by reducing on-screen movement.
        </p>
        <ProjectLinks
          website={
            'https://chrome.google.com/webstore/detail/ebb/madmcmnfddadihndjcofieeeenbndlil'
          }
          github={'https://github.com/Co-Lab-You-Belong-in-Tech/ebb-extension'}
        />
      </div>
      <OpenDetails path={'ebb'} />
    </li>
  );
};

export default Ebb;
