import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Continent.module.scss';

const Continent = ({ path, title }) => {
  return (
    <div className={styles.Continent}>
      {path.includes('Resume_Franco_Ortega') ? (
        <a href={path} rel='noreferrer' target='_blank'>
          <div>
            <div>{title}</div>
          </div>
        </a>
      ) : (
        <Link to={path}>
          <div>
            <div>{title}</div>
          </div>
        </Link>
      )}
    </div>
  );
};

Continent.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Continent;
