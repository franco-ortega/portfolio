import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContinentPopUp.module.scss';
import ClosePopup from '../buttons/ClosePopup';
import { FocusOn } from 'react-focus-on';
import { useHistory } from 'react-router-dom';

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
  children: PropTypes.element.isRequired
};

export default ContinentPopUp;
