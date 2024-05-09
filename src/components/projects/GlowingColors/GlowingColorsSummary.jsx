import React from 'react';
import ProjectSummary from '../ProjectSummary';
import ProjectLinks from '../../links/ProjectLinks';
import OpenDetails from '../../buttons/OpenDetails';
import styles from './GlowingColorsSummary.module.scss';

const GlowingColorsSummary = () => {
  return (
    <ProjectSummary>
      <div className={styles.GlowingColorsSummary}>
        <h2>Glowing Colors</h2>
        <div>
          <p>
            A colorful and dynamic visual experience that engages the user in a
            peaecful, shifting, and interactive universe.
          </p>
          <ProjectLinks
            website={'https://glowing-colors.netlify.app/'}
            github={'https://github.com/franco-ortega/glowing-colors'}
          />
        </div>
        <OpenDetails path={'glowing-colors'} />
      </div>
    </ProjectSummary>
  );
};

export default GlowingColorsSummary;
