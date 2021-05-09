import React from 'react';
import Island from './Island';
import styles from './Twitter.module.css';

const Twitter = () => {
  return (
    <section className={styles.Twitter}>
      <Island
        title={'Twitter'}
        url={'https://twitter.com/FrancoOrtegaDev'}
      />
    </section>
  );
};

export default Twitter;
