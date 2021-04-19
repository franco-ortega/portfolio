import React from 'react';
import Island from './Island';
import styles from './Twitter.module.css';

const Twitter = () => {
  return (
    <main className={styles.Twitter}>
      <Island
        title={'Twitter'}
        url={'https://twitter.com/FrancoOrtegaDev'}
      />
    </main>
  );
};

export default Twitter;
