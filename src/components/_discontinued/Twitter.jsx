import React from 'react';
import Island from '../islands/Island';
import styles from './Twitter.module.scss';

const Twitter = () => {
  return (
    <section className={styles.Twitter}>
      <Island title={'Twitter'} url={'https://twitter.com/FrancoOrtegaDev'} />
    </section>
  );
};

export default Twitter;
