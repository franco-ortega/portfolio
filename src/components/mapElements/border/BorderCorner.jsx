import React from 'react';
import PropTypes from 'prop-types';
import styles from './BorderCorner.module.scss';

const BorderCorner = ({ gridAndShape }) => {
  return <div className={styles.BorderCorner} style={gridAndShape}></div>;
};

BorderCorner.propTypes = {
  gridAndShape: PropTypes.object.isRequired,
};

export default BorderCorner;
