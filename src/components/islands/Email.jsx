import React from 'react';
import Island from './Island';
import styles from './Email.module.scss';

const Email = () => {
  return (
    <section className={styles.Email}>
      <Island
        title={'Email'}
        url={'mailto:francopdx@gmail.com'}
      />
    </section>
  );
};

export default Email;
