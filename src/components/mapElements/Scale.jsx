import React from 'react';
import styles from './Scale.module.css';

const Scale = () => {
  return (
    <main className={styles.ScaleContainer} title="scale">
      <section>
        <section className={`${styles.ScaleNumber} ${styles.ScaleNumberFirst}`}>0</section>
        <section className={`${styles.ScaleBlockBlack} ${styles.ScaleBlockFirst}`}></section>
      </section>
      <section>
        <section className={styles.ScaleNumber}>10</section>
        <section className={styles.ScaleBlockWhite}></section>
      </section>
      <section>
        <section className={styles.ScaleNumber}>20</section>
        <section className={styles.ScaleBlockBlack}></section>
      </section>
      <section>
        <section className={styles.ScaleNumber}>30</section>
        <section className={styles.ScaleBlockWhite}></section>
      </section>
      <section>
        <section className={styles.ScaleNumber}>40</section>
        <section className={styles.ScaleBlockBlack}></section>
      </section>
      <section>
        <section className={styles.ScaleNumber}>50</section>
        <section className={styles.ScaleBlockWhite}></section>
      </section>
      <section>
        <section className={styles.ScaleNumber}>60</section>
        <section className={`${styles.ScaleBlockBlack} ${styles.ScaleBlockLast}`}></section>
      </section>
      <section>
        <section className={styles.ScaleNumber}>70</section>
      </section>
    </main>
  );
};

export default Scale;
