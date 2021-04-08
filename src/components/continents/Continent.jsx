import React from 'react';
import PropTypes from 'prop-types';
import styles from './Continent.module.css';

const Continent = ({ link, shape, title }) => {
  console.log(shape);
  return (
    <div className={styles.ContinentContainer}>
      {link}

      <div className={`${styles.OuterCoastline}`}
        style={shape}
      >
        <div className={styles.Coastline}>
          <div className={styles.Continent}>
            {title}
          </div>
        </div>
      </div>
            
    </div>
  );
};

Continent.propTypes = {
  link: PropTypes.string,
  shape: PropTypes.object,
  title: PropTypes.string
};

export default Continent;
