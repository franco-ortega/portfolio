import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ClosePopup.module.css';

const ClosePopup = path => {
  let history = useHistory();

  const onCloseClick = () => {
    history.push(`/${path}`);
  };

  return (
    <button
      className={styles.ClosePopup}
      onClick={onCloseClick}
      aria-label="Close"
    >X</button>
  );
};

ClosePopup.propTypes = {
  path: PropTypes.string.isRequired
};

export default ClosePopup;
