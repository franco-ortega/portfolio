import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectSummary.module.scss';

const ProjectSummary = ({ children }) => {
  return <li className={styles.ProjectSummary}>{children}</li>;
};

ProjectSummary.propTypes = {
  children: PropTypes.element.isRequired
};

export default ProjectSummary;
