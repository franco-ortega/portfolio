import React from 'react';
// import PropTypes from 'prop-types';
import styles from './GitHub.module.css';

const GitHub = () => {
  return (
    <main className={styles.GitHub}>
      <section className={styles.OuterCoastline}>
        <section className={styles.InnerCoastline}>
          <section className={styles.Island}>
            <a
              href="https://github.com/franco-ortega"
              rel="noreferrer"
              target="_blank"
            >GitHub</a>
          </section>
        </section>
      </section>
    </main>
  );
};

GitHub.propTypes = {

};

export default GitHub;
