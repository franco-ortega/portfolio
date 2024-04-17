import React from 'react';
import PropTypes from 'prop-types';
import BorderCorner from './BorderCorner';
import styles from './Border.module.scss';

const Border = ({ children }) => {
  return (
    <div className={styles.Border}>
      <BorderCorner />
      <BorderCorner />
      <BorderCorner />
      <BorderCorner />
      <>{children}</>
    </div>
  );
};

Border.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Border;
