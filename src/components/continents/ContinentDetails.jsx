import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContinentDetails.module.css';

const ContinentDetails = ({ children }) => {
  return (
    <main className={styles.ContinentDetails}>
      {children}
    </main>
  );
};

ContinentDetails.propTypes = {
  children: PropTypes.element.isRequired
};

export default ContinentDetails;
