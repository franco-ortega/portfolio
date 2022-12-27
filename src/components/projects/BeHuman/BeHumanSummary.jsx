import React from 'react';
import OpenDetails from '../../buttons/OpenDetails';
import ProjectLinks from '../../links/ProjectLinks';
import ProjectSummary from '../ProjectSummary';
import styles from './BeHumanSummary.module.scss';

const BeHumanSummary = () => {
  return (
    <ProjectSummary>
      <div className={styles.BeHumanSummary}>
        <h2>beHuman</h2>
        <div>
          <p>
            VSCode extension that tracks work time and reminds users to take
            breaks via hourly popups with wellness tips and movement videos.
          </p>
          <ProjectLinks
            website={
              'https://marketplace.visualstudio.com/items?itemName=not-bot.be-human'
            }
            github={'https://github.com/alchemy-be-human'}
          />
        </div>
        <OpenDetails path={'behuman'} />
      </div>
    </ProjectSummary>
  );
};

export default BeHumanSummary;
