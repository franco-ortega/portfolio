import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import ProjectSummary from '../ProjectSummary';
import styles from './RootRPGSummary.module.scss';

const RootRPGSummary = () => {
  return (
    <ProjectSummary>
      <div className={styles.RootRPGSummary}>
        <h2>Root RPG Guide</h2>
        <div>
          <p>
            App designed to help new players learn the rules of the Root
            Roleplaying Game in a digestable format. Includes downloadable PDFs
            for all the character classes.
          </p>
          <ProjectLinks
            website={'https://root-rpg.vercel.app/'}
            github={'https://github.com/franco-ortega/root-rpg'}
            linkColor={''}
          />
        </div>
        <OpenDetails path={'root-rpg'} />
      </div>
    </ProjectSummary>
  );
};

export default RootRPGSummary;
