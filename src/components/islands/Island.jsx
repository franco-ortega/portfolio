import React from 'react';
import PropTypes from 'prop-types';
import styles from './Island.module.scss';

const Island = ({ title, url }) => {
  return (
    <a className={styles.Island}
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <div className={styles.OuterCoastline}>
        <div className={styles.InnerCoastline}>
          <div className={styles.Land}>
            {title}
          </div>
        </div>
      </div>
    </a>
  );
};

Island.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Island;
