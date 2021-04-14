import React from 'react';
import PropTypes from 'prop-types';
import styles from './BorderCorner.module.css';

const BorderCorner = ({grid, shape }) => {
  return (
    <main
      className={styles.BorderCorner}
      style={grid}
    >
      <section
        className={styles.CornerShape}
        style={shape}
      ></section>
    </main>
  );
};

BorderCorner.propTypes = {
  grid: PropTypes.object.isRequired,
  shape: PropTypes.object.isRequired
};

export default BorderCorner;
