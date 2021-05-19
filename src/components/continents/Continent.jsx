import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Continent.module.css';

const Continent = ({ grid, link, shape, size, title }) => {
  console.log(shape);
  return (
    <section className={styles.ContinentContainer} style={grid}>
      <Link to={link}>
        <div className={`${styles.OuterCoastline}`} style={shape}>
          <div className={styles.InnerCoastline}>
            <div className={`${styles.Continent} ${styles.Mobile}`} style={size}>
              {title}
            </div>
          </div>
        </div>
      </Link>
    </section>
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
