import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <main className={styles.Profile}>
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

Profile.propTypes = {

};

export default Profile;
