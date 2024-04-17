import React from 'react';
import PropTypes from 'prop-types';
import styles from './BorderCorner.module.scss';

const BorderCorner = ({ customStyles }) => {
  return <div className={styles.BorderCorner} style={customStyles}></div>;
};

BorderCorner.propTypes = {
  customStyles: PropTypes.object.isRequired,
};

export default BorderCorner;
