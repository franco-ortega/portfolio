import React from 'react';
import styles from './Compass.module.css';

const Compass = () => {
  return (
    <main className={styles.Compass}>
      

      <section className={styles.TopTriangle}></section>
      <section className={styles.BottomTriangle}></section>
      <section className={styles.LeftTriangle}></section>
      <section className={styles.RightTriangle}></section>

      {/* <section className={styles.InnerTriangle}></section> */}

      <section className={styles.CompassCircle}>
        <section className={styles.CompassCenter}></section>
      </section>

      <section className={styles.OuterCircle}>
        <section className={styles.MysteryCircle}></section>
      </section>


      {/* <div className={styles.GridItem}></div>
      <div className={styles.GridItem}></div>
      <div className={styles.GridItem}></div>
      <div className={styles.GridItem}></div>
      <div className={styles.GridItem}></div> */}
    </main>
  );
};

export default Compass;
