import React from 'react';
import resume from '../../assets/FrancoOrtega_Resume.pdf';
import styles from './Resume.module.css';
// import photo from '../../assets/franco.jpg';

const Resume = () => {
  window.open('./src/assets/FrancoOrtega_Resume.pdf', '_blank');
  return (
    <div className={styles.Resume}>
      <a href={resume} rel="noreferrer" target="_blank">Resume</a>
    </div>
  );
};

export default Resume;
