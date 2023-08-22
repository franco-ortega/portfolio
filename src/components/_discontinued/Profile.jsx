import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';

const Profile = () => {
  return (
    <section className={styles.Profile}>
      <Link to="/profile">
        <div className={styles.OuterCoastline}>
          <div className={styles.InnerCoastline}>
            <div className={styles.Continent}>
              Profile
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Profile;
