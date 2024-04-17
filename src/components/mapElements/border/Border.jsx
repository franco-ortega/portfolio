import React from 'react';
import PropTypes from 'prop-types';
import styles from './Border.module.scss';
import BorderCornerNew from './BorderCornerNew';

const Border = ({ children }) => {
  return (
    <div className={styles.Border}>
      <BorderCornerNew />

      <>{children}</>
    </div>
  );
};

Border.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Border;
