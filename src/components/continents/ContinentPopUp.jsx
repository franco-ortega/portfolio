import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContinentPopUp.module.scss';

const ContinentPopUp = ({ children }) => {
  return <main className={styles.ContinentPopUp}>{children}</main>;
};

ContinentPopUp.propTypes = {
  children: PropTypes.element.isRequired
};

export default ContinentPopUp;
