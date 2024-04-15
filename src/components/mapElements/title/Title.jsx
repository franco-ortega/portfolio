import React from 'react';
import styles from './Title.module.scss';

const Title = () => {
  return (
    <div className={styles.Title}>
      <header>
        <h1>Franco Ortega</h1>
        <h2>
          <span>Full Stack </span>Software Engineer
        </h2>
      </header>
    </div>
  );
};

export default Title;
