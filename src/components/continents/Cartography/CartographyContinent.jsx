import React from 'react';
import styles from './ProfileContinent.module.scss';
import Continent from '../Continent';

const CartographyContinent = () => {
  return (
    <section className={styles.CartographyContinent}>
      <Continent path='/cartography' title={'Cartography'} />
    </section>
  );
};

export default CartographyContinent;
