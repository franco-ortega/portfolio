import React from 'react';
import { useHistory } from 'react-router';
import { FocusOn } from 'react-focus-on';
import PropTypes from 'prop-types';
import styles from './ProjectDetails.module.scss';

const ProjectDetails = ({ children }) => {
  let history = useHistory();
  console.log(history);

  return (
    <FocusOn onEscapeKey={() => history.push('/projects')}>
      <main className={styles.ProjectDetails}>{children}</main>
    </FocusOn>
  );
};

ProjectDetails.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProjectDetails;
