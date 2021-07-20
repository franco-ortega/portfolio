import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './OpenDetails.module.css';

const OpenDetails = ({ path }) => {
  let history = useHistory();

  const onOpenClick = () => {
    history.push(`/${path}`);
  };

  return (
    <div className={styles.OpenDetails}>
      <button
        aria-label="Open project details"
        className={styles.OpenDetailsButton}
        onClick={onOpenClick}
      >Click for project details.</button>
    </div>
  );
};

OpenDetails.propTypes = {
  path: PropTypes.string.isRequired
};

export default OpenDetails;
