import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import { useHistory } from 'react-router-dom';
import ClosePopup from '../buttons/ClosePopup';
import styles from './ContinentPopUp.module.scss';

const ContinentPopUp = ({ children }) => {
  let history = useHistory();

  return (
    <main className={styles.ContinentPopUp}>
      <FocusOn onEscapeKey={() => history.push('/')}>
        <ClosePopup path={''} />
        {children}
      </FocusOn>
    </main>
  );
};

ContinentPopUp.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContinentPopUp;
