import React from 'react';
import Island from './Island';
import styles from './GitHub.module.scss';

const GitHub = () => {
  return (
    <section className={styles.GitHub}>
      <Island
        title={'GitHub'}
        url={'https://github.com/franco-ortega'}
      />
    </section>
  );
};

export default GitHub;
