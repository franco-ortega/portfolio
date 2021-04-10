import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './ProfileSmall.module.css';

const ProfileSmall = () => {
  return (
    <main className={styles.ProfileSmall}>
      <Link to="/profile">
        <section className={styles.OuterCoastline}>
          <section className={styles.InnerCoastline}>
            <section className={styles.Continent}>
            Profile
            </section>
          </section>
        </section>
      </Link>
        
    </main>
  );
};

ProfileSmall.propTypes = {

};

export default ProfileSmall;
