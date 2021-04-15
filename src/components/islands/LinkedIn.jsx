import React from 'react';
// import PropTypes from 'prop-types';
import styles from './LinkedIn.module.css';

const LinkedIn = () => {
  return (
    <main className={styles.LinkedIn}>
      <section className={styles.OuterCoastline}>
        <section className={styles.InnerCoastline}>
          <section className={styles.Island}>
            <a
              href="https://www.linkedin.com/in/franco-ortega/"
              rel="noreferrer"
              target="_blank"
            >LinkedIn</a>
          </section>
        </section>
      </section>
    </main>
  );
};

LinkedIn.propTypes = {

};

export default LinkedIn;
