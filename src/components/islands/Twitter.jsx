import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Twitter.module.css';

const Twitter = () => {
  return (
    <main className={styles.Twitter}>
      <section className={styles.OuterCoastline}>
        <section className={styles.InnerCoastline}>
          <section className={styles.Island}>
            <a
              href="https://twitter.com/FrancoOrtegaDev"
              rel="noreferrer"
              target="_blank"
            >Twitter</a>
          </section>
        </section>
      </section>
    </main>
  );
};

Twitter.propTypes = {

};

export default Twitter;
