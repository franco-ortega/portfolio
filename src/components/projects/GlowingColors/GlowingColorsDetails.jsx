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
        <h4>React | JavaScript | HTML | CSS</h4>
        <p>
          A colorful and dynamic visual experience that engages the user in a
          peaecful, shifting, and interactive universe.
        </p>
        <p>
          The app repeatedly renders multiple colorful orbs of varying hues and
          sizes. When the user clicks on an orb, it runs an algorithm that
          shifts the location and changes the styles of the selected orb.
        </p>
        <ProjectLinks
          website={'https://glowing-colors.netlify.app'}
          github={'https://github.com/franco-ortega/glowing-colors'}
        />
      </div>
    </ProjectDetails>
  );
};

export default GlowingColorsDetails;
