import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cartography.module.scss';

const Cartography = () => {
  return (
    <section className={styles.Cartography}>
      <Link to="/cartography">
        <div className={styles.OuterCoastline}>
          <div className={styles.InnerCoastline}>
            <div className={styles.Continent}>
              <p className={styles.Title}>Cartography</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Cartography;
