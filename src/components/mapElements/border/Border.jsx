import React from 'react';
import PropTypes from 'prop-types';
import BorderCorner from './BorderCorner';
import styles from './Border.module.scss';

const Border = ({ children }) => {
  return (
    <div className={styles.Border}>
      <BorderCorner gridAndShape={{ borderRadius: '0% 0% 90% 0%' }} />
      <BorderCorner
        gridAndShape={{ borderRadius: '0% 90% 0% 0%', alignSelf: 'flex-end' }}
      />
      <BorderCorner
        gridAndShape={{ borderRadius: '0% 0% 0% 90%', justifySelf: 'flex-end' }}
      />
      <BorderCorner
        gridAndShape={{
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
