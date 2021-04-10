import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Scale.module.css';

const Scale = () => {
  return (
    <main className={styles.ScaleContainer}>
      <section className={styles.Distance}>
        <p>
          0
        </p>
        <p>
          10
        </p>
        <p>
          20
        </p>
        <p>
          30
        </p>
        <p>
          40
        </p>
        <p>
          50
        </p>
        <p>
          60
        </p>
      </section>
      {/* <header className={styles.Header}>Scale</header> */}
      <section className={styles.Scale}>
        <section className={styles.Black}></section>
        <section className={styles.White}></section>
        <section className={styles.Black}></section>
        <section className={styles.White}></section>
        <section className={styles.Black}></section>
        <section className={styles.White}></section>
      </section>

    </main>
  );
};

Scale.propTypes = {

};

export default Scale;
