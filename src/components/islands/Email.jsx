import React from 'react';
import Island from './Island';
import styles from './Email.module.css';

const Email = () => {
  return (
    <main className={styles.Email}>
      <Island
        title={'Email'}
        url={'mailto:francopdx@gmail.com'}
      />
    </main>
  );
};

export default Email;
