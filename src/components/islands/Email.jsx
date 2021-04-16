import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Email.module.css';

const Email = () => {
  return (
    <main className={styles.Email}>
      <section className={styles.OuterCoastline}>
        <section className={styles.InnerCoastline}>
          <section className={styles.Island}>
            <a
              href="mailto:francopdx@gmail.com"
              rel="noreferrer"
              target="_blank"
            >Email</a>
          </section>
        </section>
      </section>
    </main>
  );
};

Email.propTypes = {

};

export default Email;
