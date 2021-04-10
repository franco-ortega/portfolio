import React from 'react';
import PropTypes from 'prop-types';
import styles from './Continent.module.css';

const Continent = ({ grid, link, shape, size, title }) => {
  console.log(shape);
  return (
    <div
      className={styles.ContinentContainer}
      style={grid}
    >
      {link}

      <div
        className={`${styles.OuterCoastline}`}
        style={shape}
      >
        <div className={styles.Coastline}>
          <div
            className={styles.Continent}
            style={size}
          >
            {title}
          </div>
        </div>
      </div>
            
    </div>
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
