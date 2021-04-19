import React from 'react';
import PropTypes from 'prop-types';
import styles from './Island.module.css';

const Island = ({ title, url }) => {
  return (
    <main className={styles.OuterCoastline}>
      <section className={styles.InnerCoastline}>
        <section className={styles.Island}>
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
          >{title}</a>
        </section>
      </section>
    </main>
  );
};

Island.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Island;
