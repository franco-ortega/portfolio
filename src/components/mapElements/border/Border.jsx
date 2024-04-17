import React from 'react';
import PropTypes from 'prop-types';
import BorderCorner from './BorderCorner';
import styles from './Border.module.scss';

const Border = ({ children }) => {
  return (
    <div className={styles.Border}>
      <BorderCorner
        customStyles={{
          background: `linear-gradient(
            to top right,
            hsl(240, 60%, 25%),
            hsl(0, 0%, 95%),
            hsl(240, 60%, 25%)
          )`,
          borderRadius: '0% 0% 90% 0%',
        }}
      />
      <BorderCorner
        customStyles={{
          background: `linear-gradient(
            to top left,
            hsl(240, 60%, 25%),
            hsl(0, 0%, 95%),
            hsl(240, 60%, 25%)
          )`,
          borderRadius: '0% 0% 0% 90%',
          justifySelf: 'flex-end',
        }}
      />
      <BorderCorner
        customStyles={{
          background: `linear-gradient(
            to top left,
            hsl(240, 60%, 25%),
            hsl(0, 0%, 95%),
            hsl(240, 60%, 25%)
          )`,
          borderRadius: '0% 90% 0% 0%',
          alignSelf: 'flex-end',
        }}
      />
      <BorderCorner
        customStyles={{
          background: `linear-gradient(
            to top right,
            hsl(240, 60%, 25%),
            hsl(0, 0%, 95%),
            hsl(240, 60%, 25%)
          )`,
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
