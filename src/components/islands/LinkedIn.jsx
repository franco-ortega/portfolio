import React from 'react';
import Island from './Island';
import styles from './LinkedIn.module.scss';

const LinkedIn = () => {
  return (
    <section className={styles.LinkedIn}>
      <Island
        title={'LinkedIn'}
        url={'https://www.linkedin.com/in/francoortega/'}
      />
    </section>
  );
};

export default LinkedIn;
