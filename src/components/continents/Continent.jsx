import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Continent.module.css';

const Continent = ({ grid, link, shape, size, title }) => {
  console.log(shape);
  return (
    <main className={styles.ContinentContainer} style={grid}>
      <Link to={link}>
        <section className={`${styles.OuterCoastline}`} style={shape}>
          <section className={styles.InnerCoastline}>
            <section className={styles.Continent} style={size}>
              {title}
            </section>
          </section>
        </section>
      </Link>
    </main>
  );
};

Continent.propTypes = {
  grid: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  shape: PropTypes.object.isRequired,
  size: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default Continent;
