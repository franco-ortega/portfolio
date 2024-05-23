import React from 'react';
import PropTypes from 'prop-types';
import BorderCorner from './BorderCorner';
import styles from './Border.module.scss';

const Border = ({ children }) => {
  const borderCornerGradient = (direction) => {
    return `linear-gradient(
      to ${direction},
      var(--dark-blue-three),
      var(--silver-light),
      var(--dark-blue-three)
    )`;
  };

  const direction = {
    TOP_RIGHT: 'top right',
    TOP_LEFT: 'top left',
  };

  return (
    <div className={styles.Border}>
      <BorderCorner
        customStyles={{
          background: borderCornerGradient(direction.TOP_RIGHT),
          borderRadius: '0% 0% 90% 0%',
          alignSelf: 'flex-start',
          justifySelf: 'flex-start',
        }}
      />
      <BorderCorner
        customStyles={{
          background: borderCornerGradient(direction.TOP_LEFT),
          borderRadius: '0% 0% 0% 90%',
          alignSelf: 'flex-start',
          justifySelf: 'flex-end',
        }}
      />
      <BorderCorner
        customStyles={{
          background: borderCornerGradient(direction.TOP_LEFT),
          borderRadius: '0% 90% 0% 0%',
          alignSelf: 'flex-end',
          justifySelf: 'flex-start',
        }}
      />
      <BorderCorner
        customStyles={{
          background: borderCornerGradient(direction.TOP_RIGHT),
          borderRadius: '90% 0% 0% 0%',
          alignSelf: 'flex-end',
          justifySelf: 'flex-end',
        }}
      />
      <>{children}</>
    </div>
  );
};

Border.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Border;
