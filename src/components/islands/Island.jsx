import React from 'react';
import PropTypes from 'prop-types';
import styles from './Island.module.scss';

const Island = ({ title, url }) => {
  return (
    <div className={styles.OuterCoastline}>
      <a href={url} rel='noreferrer' target='_blank'>
        <div className={styles.InnerCoastline}>
          <div className={styles.Island}>{title}</div>
        </div>
      </a>
    </div>
  );
};

Island.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Island;
