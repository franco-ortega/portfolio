import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ClosePopup.module.css';

const ClosePopup = ({ path, background, color }) => {
  let history = useHistory();

  const onCloseClick = () => {
    history.push(`/${path}`);
  };

  return (
    <button
      aria-label="Close"
      className={styles.ClosePopup}
      onClick={onCloseClick}
      style={{
        background: `${background}`,
        color: `${color}`
      }}
    >X</button>
  );
};

ClosePopup.propTypes = {
  path: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string
};

export default ClosePopup;
