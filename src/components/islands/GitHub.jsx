import React from 'react';
import Island from './Island';
import styles from './GitHub.module.css';

const GitHub = () => {
  return (
    <main className={styles.GitHub}>
      <Island
        title={'GitHub'}
        url={'https://github.com/franco-ortega'}
      />
    </main>
  );
};

export default GitHub;
