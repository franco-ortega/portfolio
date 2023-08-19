import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Continent.module.scss';

const Continent = ({ path, title }) => {
  return (
    <Link to={path}>
      <div className={styles.Continent}>
        <div>
          <div>{title}</div>
        </div>
      </div>
    </Link>
  );
};

Continent.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Continent;
