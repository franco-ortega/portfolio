import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectLinks.module.scss';

const ProjectLinks = ({ website, github, linkColor }) => {
  return (
    <p className={styles.ProjectLinks}>
      <span>
        <a
          href={website}
          rel='noreferrer'
          target='_blank'
          style={{ color: linkColor }}
        >
          Website
        </a>
      </span>
      <span>|</span>
      <span>
        <a
          href={github}
          rel='noreferrer'
          target='_blank'
          style={{ color: linkColor }}
        >
          GitHub
        </a>
      </span>
    </p>
  );
};

ProjectLinks.propTypes = {
  website: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkColor: PropTypes.string
};

export default ProjectLinks;
