import React from 'react';
import ClosePopup from '../../buttons/ClosePopup';
import ProjectLinks from '../../links/ProjectLinks';
import ProjectDetails from '../ProjectDetails';
import styles from './GlowingColorsDetails.module.scss';

const GlowingColorsDetails = () => {
  return (
    <ProjectDetails>
      <div className={styles.GlowingColorsDetails}>
        <ClosePopup path={'projects'} background={'black'} color={'white'} />
        <h3>Glowing Colors</h3>
        <h4>React | JavaScript | HTML| CSS</h4>
        <p>CONTENT - ABOUT</p>
        <p>CONTENT - TECH</p>
        <ProjectLinks
          website={'https://glowing-colors.netlify.app'}
          github={'https://github.com/franco-ortega/glowing-colors'}
        />
      </div>
    </ProjectDetails>
  );
};

export default GlowingColorsDetails;
