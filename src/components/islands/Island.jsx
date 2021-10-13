import React from 'react';
import PropTypes from 'prop-types';
import styles from './Island.module.scss';

const Island = ({ title, url }) => {
  console.log(url);
  return (
    <div className={styles.OuterCoastline}>
      <div className={styles.InnerCoastline}>
        <div className={styles.Island}>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
          >{title}</a>
        </div>
      </div>
    </div>
  );
};

Island.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Island;
