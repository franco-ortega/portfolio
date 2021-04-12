import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Scale.module.css';

const Scale = () => {
  return (
    <main className={styles.ScaleContainer}>
      <section className={styles.Scale}>
        <section className={styles.ScaleItem}>
          <section className={styles.ScaleNumber}>0</section>
          <section className={`${styles.ScaleBlockBlack} ${styles.ScaleStart}`}></section>
        </section>
        <section className={styles.ScaleItem}>
          <section className={styles.ScaleNumber}>10</section>
          <section className={styles.ScaleBlockWhite}></section>
        </section>
        <section className={styles.ScaleItem}>
          <section className={styles.ScaleNumber}>20</section>
          <section className={styles.ScaleBlockBlack}></section>
        </section>
        <section className={styles.ScaleItem}>
          <section className={styles.ScaleNumber}>30</section>
          <section className={styles.ScaleBlockWhite}></section>
        </section>
        <section className={styles.ScaleItem}>
          <section className={styles.ScaleNumber}>40</section>
          <section className={styles.ScaleBlockBlack}></section>
        </section>
        <section className={styles.ScaleItem}>
          <section className={styles.ScaleNumber}>50</section>
          <section className={`${styles.ScaleBlockWhite} ${styles.ScaleEnd}`}></section>
        </section>
        <section className={styles.ScaleItem}>
          <section className={styles.ScaleNumber}>60</section>
          <section className={`${styles.ScaleBlockBlack} ${styles.ScaleEnd}`}></section>
        </section>
        <section className={styles.ScaleItem}>
          <section className={styles.ScaleNumber}>70</section>
        </section>
      </section>

    </main>
  );
};

Scale.propTypes = {

};

export default Scale;
