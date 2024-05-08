import React from 'react';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import { useHistory } from 'react-router-dom';
import ClosePopup from '../buttons/ClosePopup';
import styles from './PopUp.module.scss';

const PopUp = ({ children }) => {
  let history = useHistory();

  return (
    <main className={styles.PopUp}>
      <FocusOn onEscapeKey={() => history.push('/')}>
        <ClosePopup path={''} />
        {children}
      </FocusOn>
    </main>
  );
};

PopUp.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PopUp;
