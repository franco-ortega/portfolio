import React from 'react';
import Island from './Island';
import styles from './LinkedIn.module.css';

const LinkedIn = () => {
  return (
    <main className={styles.LinkedIn}>
      <Island
        title={'LinkedIn'}
        url={'https://www.linkedin.com/in/franco-ortega/'}
      />
    </main>
  );
};

export default LinkedIn;
