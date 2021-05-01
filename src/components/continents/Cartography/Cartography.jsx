import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cartography.module.css';

const Cartography = () => {
  return (
    <main className={styles.Cartography}>
      <Link to="/cartography">
        <section className={styles.OuterCoastline}>
          <section className={styles.InnerCoastline}>
            <section className={styles.Continent}>
              Cartography
            </section>
          </section>
        </section>
      </Link>
    </main>
  );
};

export default Cartography;
