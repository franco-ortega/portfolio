import React from 'react';
import PropTypes from 'prop-types';
import styles from './BorderCorner.module.scss';

const BorderCorner = ({ grid, shape }) => {
  return (
    <div
      className={styles.BorderCorner}
      style={grid}
    >
      <div
        className={styles.CornerShape}
        style={shape}
      ></div>
    </div>
  );
};

BorderCorner.propTypes = {
  grid: PropTypes.object.isRequired,
  shape: PropTypes.object.isRequired
};

export default BorderCorner;
