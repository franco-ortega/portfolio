import React from 'react';
import styles from './ProfileContinent.module.scss';
import Continent from '../Continent';

const ProfileContinent = () => {
  return (
    <section className={styles.ProfileContinent}>
      <Continent path='/profile' title={'Profile'} />
    </section>
  );
};

export default ProfileContinent;
