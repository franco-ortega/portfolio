import React from 'react';
import PropTypes from 'prop-types';
import styles from './Border.module.scss';

const Border = ({ children }) => {
  return <div className={styles.Border}>{children}</div>;
};

Border.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Border;
