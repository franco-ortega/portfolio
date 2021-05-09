import React from 'react';
import Island from './Island';
import styles from './LinkedIn.module.css';

const LinkedIn = () => {
  return (
    <section className={styles.LinkedIn}>
      <Island
        title={'LinkedIn'}
        url={'https://www.linkedin.com/in/franco-ortega/'}
      />
    </section>
  );
};

export default LinkedIn;
